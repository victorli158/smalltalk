import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import RootReducer from './reducers/index';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Text, View } from 'react-native';
import { SplashStack, HomeStack } from './config/router';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(RootReducer, initialState, enhancer);
};

const store = configureStore({});

const App = () => {
  return(
    <Provider store={store}>
      <HomeStack />
    </Provider>)
  ;
};

export default App;
