import { createSlice } from '@reduxjs/toolkit';

const WishListSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: []
  },
  reducers: {
    addWishlistItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (!existingItem) {
        state.items.push({...item});
      }
    },
    removeWishlitstItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(i => i.id !== itemId);
    }
  }
});

export const { addWishlistItem, removeWishlistItem } = WishListSlice.actions;

export default WishListSlice.reducer;