import { connect } from 'react-redux';
import { updatePost } from '../actions/post_actions';
import { selectPost } from '../reducers/selectors';
import PostUpdate from './post_update';

const mapStateToProps = (state, { match }) => {
  const postId = parseInt(match.params.id);
  const post = selectPost(state, postId);
  return ({
    postId,
    post
  });
};

const mapDispatchToProps = (dispatch) => ({
  updatePost: (id, posts) => dispatch(updatePost(id, posts))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostUpdate);
