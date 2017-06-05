import merge from 'lodash/merge';
import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_POST:
      const newPost = merge({}, state,{[action.post.id]: action.post});
      return newPost;
    case RECEIVE_POSTS:
      return action.posts;
    case REMOVE_POST:
      const beforeDelete = merge({}, state);
      delete beforeDelete[action.post.id];
      return beforeDelete;
    default:
      return state;
  }
};

export default postsReducer;
