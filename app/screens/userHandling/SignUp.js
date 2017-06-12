import React from 'react';
import { View } from 'react-native';

import colors from '../../config/colors';
import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { HomeStack } from '../../config/router';

const fields = [
  { placeholder: 'Enter username..', stateKey: 'username' },
  { placeholder: 'Enter email..', stateKey: 'email' },
  { placeholder: 'Enter password..', stateKey: 'password' },
];

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameInvalid = this.usernameInvalid.bind(this);
    this.passwordInvalid = this.passwordInvalid.bind(this);
    this.emailInvalid = this.emailInvalid.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(text, stateKey) {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  }


  usernameInvalid() {
    if (this.state.username === undefined || this.state.username === "") {
      return true;
    } else {
      return false;
    }
  }

  passwordInvalid() {
    if (this.state.password === undefined || this.state.password === "") {
      return true;
    } else {
      return false;
    }
  }

  emailInvalid() {
    if (this.state.email === undefined || this.state.email === "") {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit() {
    if (this.usernameInvalid() || this.passwordInvalid() || this.emailInvalid()) {
      alert("Please fill in all fields.");
    } else {
      this.props.signUp(this.state).then(
        () => this.props.navigation.navigate('HomeStack')
      ).catch((error) => {
        alert(error.message);
      });
    }
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center'}}>
        {
          fields.map((field) => (
            <TextInput
              style={{ width: 300, height: 40}}
              key={field.stateKey}
              onChangeText={(text) => this.onInputChange(text, field.stateKey)}
              {...field}
            />
          ))
        }
        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            label="Sign Up"
            onPress={() => this.handleSubmit()}
          />
        </View>
      </View>
    );
  }
}

export default SignUp;
