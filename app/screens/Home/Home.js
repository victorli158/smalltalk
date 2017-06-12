import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

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
      <View style={{flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginBottom: 20, fontSize: 20, fontWeight: 'bold'}}>
          Hi, {this.state.users[0].username}!
        </Text>
        <TopicButton
          label="General"
          onPress={this.handleGeneralPress}
        />
        <TopicButton
          label="News"
          onPress={this.handleNewsPress}
        />
        <TopicButton
          label="Sports"
          onPress={this.handleSportsPress}
        />
        <TopicButton
          label="Movies and TV"
          onPress={this.handleMoviesTVPress}
        />
        <TopicButton
          label="Gaming"
          onPress={this.handleGamingPress}
        />
        <PrimaryButton label="Start Chat" onPress={this.handleQueuePress} />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
