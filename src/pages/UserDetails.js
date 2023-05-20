import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserPostsByUser } from '../store/actions/userActions';
import { selectUser, selectUserPosts } from '../selectors/userSelectors';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';

const UserDetails = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigation = useNavigate();
  const user = useSelector(selectUser);
  const posts = useSelector(selectUserPosts);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchUserPostsByUser(userId));
  }, [dispatch, userId]);

  const handleGoBack = () => {
    navigation.push('/');
  };

  return (
    <div>
      <button className="btn btn-link" onClick={handleGoBack}>
        Назад
      </button>
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserCard user={user} posts={posts} onAvatarClick={handleGoBack} />
        </>
      )}
    </div>
  );
};

export default UserDetails;
