import React from 'react';
import { Button, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createTransition } from 'react-native-transition';
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
      <View style={{backgroundColor: '#C9E4CA', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.button} style={{backgroundColor: '#87BBA2'}} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} style={{backgroundColor: '#55828B'}} onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.text}>
            Sign Up
          </Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 100,
    width: 200,
  },
  text: {
    fontSize: 30,
    fontWeight: '600'
  }
});

export default Splash;
