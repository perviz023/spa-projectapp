//userAction.js

import axios from 'axios';
import { types } from '../types';


export const fetchUserSuccess = (user) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: types.FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUserPostsSuccess = (posts) => ({
  type: types.FETCH_USER_POSTS_SUCCESS,
  payload: posts,
});

export const fetchUserPostsFailure = (error) => ({
  type: types.FETCH_USER_POSTS_FAILURE,
  payload: error,
});

export const fetchUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_USER_REQUEST });

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = response.data;

      dispatch(fetchUserSuccess(user));
    } catch (error) {
      console.error('Error fetching user:', error);
      dispatch(fetchUserFailure(error.message));
    }
  };
};

export const fetchUserPostsByUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_USER_REQUEST });

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const posts = response.data;

      dispatch(fetchUserPostsSuccess(posts));
    } catch (error) {
      console.error('Error fetching user posts:', error);
      dispatch(fetchUserPostsFailure(error.message));
    }
  };
};
