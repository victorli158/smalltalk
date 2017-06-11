import React from 'react';
import { View } from 'react-native';

import colors from '../../config/colors';
import { TextInput } from '../../components/TextInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { HomeStack } from '../../config/router';

const fields = [
  { placeholder: 'Enter username..', stateKey: 'username' },
  { placeholder: 'Enter password..', stateKey: 'password' },
];

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  }

  handleSubmit = () => {
    this.props.signIn(this.state).then(
      () => this.props.navigation.navigate('HomeStack')
    ).catch((error) => {
      alert(error.message);
    });
  }


  render(){
    return(
      <View>
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
            label="Login"
            onPress={() => this.handleSubmit()}
          />
        </View>
      </View>
    )
  }
}

export default Login;
