import { RECEIVE_USER, REMOVE_USER } from '../actions/session/sessionActions'
import _ from 'lodash';

const initialState = {
  name: ''
}

export default session = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_USER:
      return action.user
    case REMOVE_USER:
      return initialState
    default:
      return state;
  }
}
