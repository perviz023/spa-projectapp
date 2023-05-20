import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFailure, } from './actions/postsActions';
import { fetchUserSuccess, fetchUserFailure, fetchUserPostsSuccess, fetchUserPostsFailure } from './actions/userActions';
import { fetchPosts, fetchUser, fetchUserPosts } from './api';

// Генератор для выполнения асинхронного запроса на получение постов
function* fetchPostsSaga() {
  try {
    const posts = yield call(fetchPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

// Генератор для выполнения асинхронного запроса на получение пользователя
function* fetchUserSaga(action) {
  const userId = action.payload;
  try {
    const user = yield call(fetchUser, userId);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

// Генератор для выполнения асинхронного запроса на получение постов пользователя
function* fetchUserPostsSaga(action) {
  const userId = action.payload;
  try {
    const userPosts = yield call(fetchUserPosts, userId);
    yield put(fetchUserPostsSuccess(userPosts));
  } catch (error) {
    yield put(fetchUserPostsFailure(error.message));
  }
}

// Главный генератор для слежения за действиями и запуска соответствующих саг
function* rootSaga() {
  yield takeLatest('FETCH_POSTS_REQUEST', fetchPostsSaga);
  yield takeLatest('FETCH_USER_REQUEST', fetchUserSaga);
  yield takeLatest('FETCH_USER_POSTS_REQUEST', fetchUserPostsSaga);
}

export default rootSaga;
