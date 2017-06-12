import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { QueueSpinner } from '../../components/QueueSpinner';
import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { TopicButton } from '../../components/TopicButton';
import colors from '../../config/colors';

class StartChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleCancel() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={{backgroundColor: colors.background, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <QueueSpinner/>
        <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{justifyContent: 'center', alignItems: 'center', marginBottom: 40, fontSize: 20}}>
            Please wait...
          </Text>
          <PrimaryButton
            label="Cancel"
            onPress={this.handleCancel}
          />
        </View>
      </View>
    );
  }
}

export default StartChat;
