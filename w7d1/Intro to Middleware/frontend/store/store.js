import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
};

const middleware = applyMiddleware(logger);

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, middleware);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;
