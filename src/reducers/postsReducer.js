const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS/FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'POSTS/FETCH_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case 'POSTS/FETCH_POSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
