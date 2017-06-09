import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Text } from 'react-native';

import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/Buttons';
import colors from '../../config/colors';

const fields = [
  { placeholder: 'Category', stateKey: 'category' },
  { placeholder: 'Title', stateKey: 'title' },
  { placeholder: 'Start', stateKey: 'startDatetime' },
  { placeholder: 'End', stateKey: 'endDatetime' },
];

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(text, stateKey) {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  }

  handleSubmit(index, override) {
    const form = {
      title: this.state.title,
      location: this.state.location,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    if (index === fields.length - 1 || override) {
      this.props.createTrip(form);
    } else {
      const nextField = fields[index + 1];
      this[nextField.stateKey].focus();
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
        {fields.map((field, index) => (
          <TextInput
            key={field.stateKey}
            ref={(input) => { this[field.stateKey] = input; }}
            value={this.state[field.stateKey]}
            onChangeText={(text) => this.onInputChange(text, field.stateKey)}
            returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
            onSubmitEditing={() => this.handleSubmit(index)}
            {...field}
          />
        ))}
        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            label="Save"
            onPress={() => this.handleSubmit(0, true)}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddEvent;
