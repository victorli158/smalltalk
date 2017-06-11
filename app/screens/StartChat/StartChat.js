import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

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
      <ScrollView>
        <QueueSpinner/>
        <View>
          <PrimaryButton
            label="Cancel"
            onPress={this.handleCancel}
          />
        </View>
      </ScrollView>
    );
  }
}

export default StartChat;
