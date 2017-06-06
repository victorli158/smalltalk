import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
