import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Text, View } from 'react-native';

export default class PlanIt extends Component {
  render() {
    return (
      <View>
        <Text>We're in boys</Text>
        <Text>We're in boys</Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('frontend', () => PlanIt);
