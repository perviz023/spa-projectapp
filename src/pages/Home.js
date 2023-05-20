//Home.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions/postsActions';
import { selectAllPosts } from '../selectors/postsSelectors';
import Post from '../components/Post';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(selectAllPosts);
  console.log("Posts:", posts);
  const loading = useSelector((state) => state.posts && state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(Array.isArray(posts));

  return (
    <div>
      <h2>Список постов</h2>
      {loading ? (
        <Loader />
      ) : (
        posts !== null && Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>No posts available.</p>
        )
      )}
    </div>
  );
};

export default Home;
