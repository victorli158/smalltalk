import React from 'react';


class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {

    const { post } = this.props;

    return (
    <div>
      <h1>{post.title}</h1>
      <li>{post.body}</li>
    </div>
    );
  }
}

export default Post;
