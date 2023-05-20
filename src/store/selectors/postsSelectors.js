// postsSelectors.js

// export const getPosts = state => state.posts;
export const getPostById = (state, postId) => state.posts.find(post => post.id === postId);
export const selectAllPosts = state => {
  console.log("Selecting all posts...", state.posts);
  return state.posts;
};
export const selectUserById = (state, userId) => {
    return state.users.find(user => user.id === userId);
  };
  