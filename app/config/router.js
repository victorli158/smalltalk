import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash';
import LoginContainer from '../screens/userHandling/LoginContainer';
import SignUpContainer from '../screens/userHandling/SignUpContainer';
import StartChatContainer from '../screens/StartChat/StartChatContainer';

export const HomeStack = StackNavigator({
  StartChat: {
    screen: StartChatContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Start Chat',
      headerLeft: null,
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: null
    })
  },
},
{
  headerMode: 'screen'
});

export const SplashStack = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Signup: {
    screen: SignUpContainer,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  HomeStack: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
},
{
  headerMode: 'screen'
});
