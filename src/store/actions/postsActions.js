import { types } from "../types";

export const fetchPostsSuccess = (posts) => {
  console.log('Posts fetched successfully:', posts);
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => ({
  type: types.FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return {
    type: types.FETCH_POSTS_REQUEST,
  };
};
