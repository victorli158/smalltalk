import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Text, View } from 'react-native';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});

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

const App = () => {
  <Provider store={store}>
    <PlanIt />
  </Provider>
};



AppRegistry.registerComponent('frontend', () => App);
