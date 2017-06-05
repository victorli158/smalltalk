import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post_actions';
import { selectPost } from '../reducers/selectors';
import Post from './post';

const mapStateToProps = (state, { match }) => {
  const postId = parseInt(match.params.id);
  const post = selectPost(state, match.params.id);
  return {
    postId,
    post
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (id) => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
