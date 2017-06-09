import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateTripContainer from '../screens/CreateTripContainer';
import Home from '../screens/Home';
import Base from '../screens/userHandling/Base';
import LoginContainer from '../screens/userHandling/LoginContainer';
import SignUpContainer from '../screens/userHandling/SignUpContainer';
import Splash from '../screens/Splash';

export const HomeStack = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: (navigation) => ({
      title: 'Splash'
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Friends4U',
    })
  },
  Base: {
    screen: Base,
    navigationOptions: ({ navigation }) => ({
      title: 'Base',
    })
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
    })
  },
  SignUp: {
    screen: SignUpContainer,
  },
  CreateTrip: {
    screen: CreateTripContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Create Trip',
    })
  },
});
