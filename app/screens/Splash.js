import React from 'react';
import { Button, View, Image, Text, TouchableOpacity } from 'react-native';
import { createTransition } from 'react-native-transition';

import { PrimaryButton } from '../components/PrimaryButton';
import colors from '../config/colors';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.switch = this.switch.bind(this);
    this.Transition = createTransition();
  }

  componentDidMount() {
    setTimeout(this.switch, 2000);
  }

  switch() {
    this.Transition.show(
      <View style={{backgroundColor: colors.background, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <PrimaryButton
          onPress={() => this.props.navigation.navigate('Login')}
          label="Login"
        />
        <PrimaryButton
          onPress={() => this.props.navigation.navigate('Signup')}
          label="Sign Up"
        />
      </View>
    );
  }

  render() {
    return (
      <this.Transition style={{flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/icon.png')}
            style={{width: 100, height: 67, marginBottom: 20}}
          />
        </View>
      </this.Transition>
    );
  }
}

export default Splash;
