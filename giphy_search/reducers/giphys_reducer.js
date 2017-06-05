import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const GiphyReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys;
    default:
      return state;
  }
};

const GiphyReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_GIPHYS:
    return action.giphys;
  default:
    return state;
  }
};

export default GiphyReducer;
