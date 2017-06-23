import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../config/colors';

class Login extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background}}>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('SignUp')}>
          <Text>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {

  }
});

export default Login;
