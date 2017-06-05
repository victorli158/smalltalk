import { values } from 'lodash';

export const selectAllPosts = ({ posts }) => values(posts);
export const selectPost = ({ posts }, id) => {
  const post = posts[id] || {};
  return post;
};
