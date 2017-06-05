import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());

  next(action);

  console.log(store.getState());
};

const applyMiddlewares = (store, middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};

window.addLoggingToDispatch = addLoggingToDispatch;
window.store = configureStore;

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  store = applyMiddlewares(store,)
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
