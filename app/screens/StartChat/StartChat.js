import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { TextInput } from '../../components/TextInput';
import { PrimaryButton, TopicButton } from '../../components/Buttons';
import colors from '../../config/colors';

class StartChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {

  }

  handleClick() {

  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>

        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            label="Chat Now!"
            onPress={() => this.handleClick(0, true)}
          />
        </View>
      </ScrollView>
    );
  }
}

export default StartChat;
