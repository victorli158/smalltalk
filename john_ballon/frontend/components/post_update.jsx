import React from 'react';
import { Redirect } from 'react-router';

class PostUpdate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.updatePost(this.props.postId, { post }).then(
      this.props.history.push('/') 
    );
  }

  render() {
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            onChange={ this.update('title') }
            />
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            onChange={this.update('body') }
          ></textarea>
        </label>
        <button className="create-button">Edit Post!</button>
      </form>
    );
  }
}

export default PostUpdate;
