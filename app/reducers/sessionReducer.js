import { RECEIVE_USER, REMOVE_USER, RECEIVE_KEY } from '../actions/session/sessionActions';
import _ from 'lodash';

const initialState = {
  username: "",
  email: "",
  sessionKey: "",
  id: ""
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_KEY:
      // let newState = Object.assign(state);
      let newState = {};
      newState["sessionKey"] = action.key;
      newState["username"] = state.username;
      return newState;
    case RECEIVE_USER:
      console.log('HERE2');
      return action.user;
    case REMOVE_USER:
      console.log('HERE3');
      return initialState;
    default:
      console.log('HERE4');
      return state;
  }
};

export default SessionReducer;
