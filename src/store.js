import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  posts: [""],
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  preloadedState: initialState, // Установите начальное состояние для хранилища
  devTools: true // Включите расширение Redux DevTools
});

sagaMiddleware.run(rootSaga);

console.log('Initial state:', store.getState()); // Вывод начального состояния в консоль

export default store;
