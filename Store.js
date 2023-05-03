import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './features/CartSlice';
import wishlistReducer from './features/WishListSlice';

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

const getInitialState = () => {
  const state = localStorage.getItem('reduxState');
  if (state) {
    return JSON.parse(state);
  }
  return {};
};

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: getInitialState(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export { store };
