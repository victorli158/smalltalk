import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash';
import LoginContainer from '../screens/userHandling/LoginContainer';
import SignUpContainer from '../screens/userHandling/SignUpContainer';
import StartChatContainer from '../screens/StartChat/StartChatContainer';
import colors from './colors';
import ChatContainer from '../screens/Chat/ChatContainer';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: null,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.primary
      }
    })
  },
  StartChat: {
    screen: StartChatContainer,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: null,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.primary
      }
    })
  },
  Chat: {
    screen: ChatContainer,
  }
},
{
  headerMode: 'screen'
});

export const SplashStack = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.primary
      },
      title: 'Small Talk'
    })
  },
  Login: {
    screen: LoginContainer,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.primary
      }
    })
  },
  Signup: {
    screen: SignUpContainer,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: colors.primary
      }
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
