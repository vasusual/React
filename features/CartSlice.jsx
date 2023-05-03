import { createSlice } from '@reduxjs/toolkit';

const CART_STATE_KEY = 'cartState';

const getCartStateFromLocalStorage = () => {
  const storedCartState = localStorage.getItem(CART_STATE_KEY);
  return storedCartState ? JSON.parse(storedCartState) : { items: [] };
};

const saveCartStateToLocalStorage = (cartState) => {
  localStorage.setItem(CART_STATE_KEY, JSON.stringify(cartState));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartStateFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({...item, quantity: 1});
      }
      saveCartStateToLocalStorage(state); 
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(i => i.id !== itemId);
        } else {
          existingItem.quantity--;
        }
        saveCartStateToLocalStorage(state);
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);
      if (existingItem) {
        existingItem.quantity++;
        saveCartStateToLocalStorage(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        saveCartStateToLocalStorage(state); 
      }
    }
  }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
