import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateTripContainer from '../screens/CreateTrip/CreateTripContainer';
import Home from '../screens/Home/Home';
import Base from '../screens/userHandling/Base';
import LoginContainer from '../screens/userHandling/LoginContainer';
import SignUpContainer from '../screens/userHandling/SignUpContainer';


export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'PlanIt',
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
  }
});
