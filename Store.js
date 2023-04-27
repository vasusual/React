import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './features/CartSlice';
import wishlistReducer from './features/WishListSlice'

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    wishlist: wishlistReducer,
  },
});

export { store };
