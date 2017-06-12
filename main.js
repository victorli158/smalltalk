import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
    RTCPeerConnection,
    RTCMediaStream,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStreamTrack,
    getUserMedia,
} from 'react-native-webrtc';

const connection = new WebSocket('ws://localhost:9090');


class Main extends Component {
    // Initial state
    state = {
        videoURL: null,
        isFront: true
    }

  componentDidMount() {
    const configuration = { "iceServers": [{ "url": "stun:stun.l.google.com:19302" }] };
    const pc = new RTCPeerConnection(configuration);
    const { isFront } = this.state;
    MediaStreamTrack.getSources(sourceInfos => {
      console.log('MediaStreamTrack.getSources', sourceInfos);
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'video' && sourceInfo.facing === (isFront ? 'front' : 'back')) {
          videoSourceId = sourceInfo.id;
        }
      }
      getUserMedia({
        audio: true,
        // video: Platform.OS === 'ios' ? false : {
        video: {
          mandatory: {
            minWidth: 500,
            minHeight: 300,
            minFrameRate: 30
          },
          facingMode: (isFront ? 'user' : 'environment'),
          optional: (videoSourceId ? [{ sourceId: videoSourceId }] : [])
        }
      }, (stream) => {
        console.log('Streaming OK', stream);
        this.setState({
          videoURL: stream.toURL()
        });
        pc.addStream(stream);
      }, error => {
        console.log('Oops, we getting error', error.message);
        throw error;
      });
    });

    //handling messages
    connection.onmessage = (message) => {
      console.log("Message:", message.data);

      const data = JSON.parse(message.data);

      switch(data.type) {
        case "offer":
          handleOffer(data.offer, data.name)
          break;
        case "answer":
          handleAnswer(data.answer)
          break;
        case "candidate":
          handleCandidate(data.candidate)
          break;
        default:
          break;
      }
    };

    //send JSON messages
    const send = (message) => {
      connection.send(JSON.stringify(message));
    };

    //Will be sent on button press
    const startNegotiation = () => {
      pc.createOffer((offer) => {

        send({
          type: 'offer',
          offer
        });

        pc.setLocalDescription(offer);
      });
    }


    const handleOffer = (offer, name) => {
      connectedUser = name;
      pc.setRemoteDescription(new RTCSessionDescription(offer));

      pc.createAnswer((answer) => {
        pc.setLocalDescription(answer, () => {
          // Send pc.localDescription to peer
          send({
            type: 'answer',
            answer: answer
          });
        }, (e) => { throw e; });
      }, (e) => { throw e; });
    }

    const handleAnswer = (answer) => {
      pc.setRemoteDescription(new RTCSessionDescription(answer));
    };

    const handleCandidate = (candidate) => {
      pc.addIceCandidate(new RTCIceCandidate(candidate))
    }

    pc.onicecandidate = (event) => {
      // send event.candidate to peer
      if (event.candidate) {
        send(event.candidate)
      } else {
        console.log('All ICE candidates have been exhausted.')
      }
    };
  }

  render() {
    return (
      <RTCView streamURL={this.state.videoURL} style={styles.container} />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#000'
  }
};

export default Main;
