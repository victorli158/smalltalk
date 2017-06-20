import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../../config/colors';
import { PrimaryButton } from '../../components/PrimaryButton';
import { TopicButton } from '../../components/TopicButton';
import { users } from '../../config/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleNewsPress = this.handleNewsPress.bind(this);
    this.handleSportsPress = this.handleSportsPress.bind(this);
    this.handleMoviesTVPress = this.handleMoviesTVPress.bind(this);
    this.handleGeneralPress = this.handleGeneralPress.bind(this);
    this.handleGamingPress = this.handleGamingPress.bind(this);
    this.handleQueuePress = this.handleQueuePress.bind(this);
    this.state = {
      users: users,
      topics: {
        general: false,
        news: false,
        sports: false,
        moviesTV: false,
        gaming: false
      }
    };
  }

  handleGeneralPress() {
    if (this.state.topics['general'] === false) {
      this.state.topics['general'] = true;
    }  else {
      this.state.topics['general'] = false;
    }
  }

  handleNewsPress() {
    if (this.state.topics['news'] === false) {
      this.state.topics['news'] = true;
    }  else {
      this.state.topics['news'] = false;
    }
  }

  handleSportsPress() {
    if (this.state.topics['sports'] === false) {
      this.state.topics['sports'] = true;
    }  else {
      this.state.topics['sports'] = false;
    }
  }

  handleMoviesTVPress() {
    if (this.state.topics['moviesTV'] === false) {
      this.state.topics['moviesTV'] = true;
    }  else {
      this.state.topics['moviesTV'] = false;
    }
  }

  handleGamingPress() {
    if (this.state.topics['gaming'] === false) {
      this.state.topics['gaming'] = true;
    }  else {
      this.state.topics['gaming'] = false;
    }
  }

  handleQueuePress() {
    this.props.navigation.navigate('Chat');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text>Thing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, backgroundColor: 'skyblue'}}>
          <Text>Another one.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, backgroundColor: 'steelblue'}}>
          <Text>Another one..</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  button_container: {
    flex: 1
  },
  button: {
    flex: 1,
  }
})

export default Home;
