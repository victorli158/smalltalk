import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchPosts, deletePost, createPost } from '../actions/post_actions';
import { selectAllPosts } from '../reducers/selectors';


const mapStateToProps = (state) => ({
  posts: selectAllPosts(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (id) => dispatch(deletePost(id)),
  createPost: (post) => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex);
