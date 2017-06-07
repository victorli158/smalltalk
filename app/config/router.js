import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Base from '../screens/userHandling/Base';
import LoginContainer from '../screens/userHandling/LoginContainer';
import SignUp from '../screens/userHandling/SignUp';

export const HomeStack = StackNavigator({
  Base: {
    screen: Base,
    navigationOptions: ({ navigation }) => ({
      title: 'PlanIt',
    })
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
    })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      title: 'Sign Up',
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'PlanIt',
    })
  }
});
