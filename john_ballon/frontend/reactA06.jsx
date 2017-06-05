import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchPosts, deletePost, fetchPost, createPost, updatePost } from './util/post_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.createPost = createPost;
window.fetchPost = fetchPost;
window.fetchPosts = fetchPosts;
window.deletePost = deletePost;
window.updatePost = updatePost;
