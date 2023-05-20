export const selectUser = (state, userId) => {
    return state.users.find(user => user.id === userId);
  };
  
  export const selectUserPosts = (state, userId) => {
    return state.posts.filter(post => post.userId === userId);
  };