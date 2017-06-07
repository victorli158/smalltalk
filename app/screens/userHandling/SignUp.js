import React from 'react';
import { View, TextInput } from 'react-native';

class SignUp extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <View>
        <TextInput
          placeholder="Enter first and last name.."
          style={{ width: 300, height: 40}}
          onChangeText={(text) => console.log(text)}
          autoCorrect={false}
          autoCapitalize='none'
        />
      </View>
    )
  }
}

export default SignUp;
