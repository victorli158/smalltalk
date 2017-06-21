import React from 'react';
import { View } from 'react-native';

import colors from '../../config/colors';
import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { HomeStack } from '../../config/router';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameInvalid = this.usernameInvalid.bind(this);
    this.passwordInvalid = this.passwordInvalid.bind(this);
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

  handleSubmit() {
    if (this.usernameInvalid() || this.passwordInvalid()) {
      alert("Please fill in all fields.");
    } else {
      this.props.signIn(this.state).then(
        () => this.props.navigation.navigate('HomeStack')
      ).catch((error) => {
        error.json().then((resp) => {
          alert(resp.errors);
        });
      });
    }
  }

  render(){
    console.log('supma');
    return(
      <View style={{flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{ width: 300, height: 40}}
          key={'username'}
          placeholder={'Enter username'}
          onChangeText={(text) => this.onInputChange(text, 'username')}
        />
        <TextInput
          style={{ width: 300, height: 40}}
          key={'password'}
          placeholder={'Enter password'}
          secureTextEntry={true}
          onChangeText={(text) => this.onInputChange(text, 'password')}
        />
        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            label="Login"
            onPress={() => this.handleSubmit()}
          />
        </View>
      </View>
    );
  }
}

export default Login;
