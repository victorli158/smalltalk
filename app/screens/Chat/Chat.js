import React, { Component } from 'react';
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import { PrimaryButton } from '../../components/PrimaryButton';
import {
    RTCPeerConnection,
    RTCMediaStream,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStreamTrack,
    getUserMedia,
} from 'react-native-webrtc';


class Chat extends Component {
  constructor(props){
    super(props);
    let str = JSON.stringify(this.props.session);
    this.startNegotiation = this.startNegotiation.bind(this);
    this.endSession = this.endSession.bind(this);
    this.send = this.send.bind(this);
    this.closeConnections = this.closeConnections.bind(this);
    this.connection = new WebSocket(`ws://flex-aa.herokuapp.com/?session_key=${this.props.session.sessionKey}`);
    this.state = {
      localVideoURL: null,
      remoteVideoURL: null,
      isFront: true
    };
  }

  componentDidMount() {
    const configuration = { "iceServers": [{ "url": "stun:stun2.1.google.com:19302" }] };
    this.pc = new RTCPeerConnection(configuration);
    const { isFront } = this.state;
    MediaStreamTrack.getSources(sourceInfos => {
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'video' && sourceInfo.facing === (isFront ? 'front' : 'back')) {
          videoSourceId = sourceInfo.id;
        }
      }
      getUserMedia({
        audio: true,
        video: Platform.OS === 'ios' ? false : {
        // video: {
          mandatory: {
            minWidth: 50,
            minHeight: 30,
            minFrameRate: 30
          },
          facingMode: (isFront ? 'user' : 'environment'),
          optional: (videoSourceId ? [{ sourceId: videoSourceId }] : [])
        }
      }, (stream) => {
        this.setState({
          localVideoURL: stream.toURL()
        });
        this.pc.addStream(stream);
        this.pc.onaddstream = (e) => {
          this.setState({
            remoteVideoURL: e.stream.toURL()
          });
        };
      }, error => {
        console.log('Oops, we getting error', error.message);
        throw error;
      });
    });

    //handling messages
    this.connection.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);
      if (data.username !== this.props.session.username){
        switch(data.type) {
          case "offer":
            handleOffer(data.offer, data.name);
            break;
          case "answer":
            handleAnswer(data.answer);
            break;
          case "candidate":
            handleCandidate(data.candidate);
            break;
          case "ready":
            this.startNegotiation();
            break;
          // case "disconnected":
          //   this.closeConnections();
          default:
            break;
        }
      }
    };

    const handleOffer = (offer) => {
      this.pc.setRemoteDescription(new RTCSessionDescription(offer), () => '', ()=>'');

      this.pc.createAnswer((answer) => {
        this.pc.setLocalDescription(answer, () => '', ()=>'');
        this.send({
          type: 'answer',
          answer
        });
      });
    };

    const handleAnswer = (answer) => {
      this.pc.setRemoteDescription(new RTCSessionDescription(answer), () => '', ()=>'');
    };

    const handleCandidate = (candidate) => {
      this.pc.addIceCandidate(new RTCIceCandidate(candidate), () => '', ()=>'');
    };

    this.pc.onicecandidate = (event) => {
      // send event.candidate to peer
      if (event.candidate) {
        this.send({
          candidate: event.candidate
        });
      }
    };
  }

  startNegotiation(){
    this.pc.createOffer((offer) => {

      this.send({
        type: 'offer',
        offer
      });

      this.pc.setLocalDescription(offer, () => '', ()=>'');
    });
  }

  endSession(){
    this.pc.close();
    this.connection.close();
    this.props.navigation.navigate('Home');
  }

  closeConnections(){
    this.pc.close();
    this.connection.close();
  }

  componentWillUnmount(){
    this.closeConnections;
  }

  //send JSON messages
  send(message){
    this.connection.send(JSON.stringify(message));
  }

  render() {
    return (
      <View style={styles.container}>
        <RTCView streamURL={this.state.localVideoURL} style={styles.localStream} />
        <RTCView streamURL={this.state.remoteVideoURL} style={styles.remoteStream} />
        <View style={styles.buttons}>
          <TouchableOpacity style={{flex: 1, backgroundColor: '#004346', justifyContent: 'center', alignItems: 'center'}} onPress={this.startNegotiation}>
            <Text style={styles.text}>Connect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, backgroundColor: '#172A3A', justifyContent: 'center', alignItems: 'center'}} onPress={this.endSession}>
            <Text style={styles.text}>Disconnect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600'
  },
  remoteStream: {
    flex: 1,
  },
  localStream: {
    position: 'absolute',
    top: 30,
    left: 290,
    zIndex: 1000,
    height: 125,
    width: 75,
  },
  buttons: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
  }
};

export default Chat;
