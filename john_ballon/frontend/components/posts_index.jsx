import React from 'react';
import { Link } from 'react-router-dom';
import PostForm from './post_form';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts};

  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, deletePost, createPost } = this.props;
    const allPosts = posts.map((post, idx) => (
      <li key={idx}>
        <Link to={`/posts/show/${post.id}`}>{post.title}</Link>
        <br />
        <Link to={`/posts/edit/${post.id}`}>Edit</Link>
        <br />
        <button onClick={() => deletePost(post.id)}>DELETE</button>
      </li>
    ));

    return (
      <div>
        <h1 style={{color: 'green'}}>We need to go deeper.</h1>
        <ul>
          {allPosts}
        </ul>
        <div>
          <PostForm createPost={ createPost }/>
        </div>
      </div>
    );
  }
}

export default PostsIndex;
