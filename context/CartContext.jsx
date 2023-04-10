import React, { useState } from 'react';

export const CartContext = React.createContext({
  cart: [],
  addItem: (item) => {},
  removeItem: (itemId) => {},
  increaseItem: (itemId) => {},
  decreaseItem: (itemId) => {},
  updateQuantity: (itemId, quantity) => {},
});

const CartProvider = (props) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const persistCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addItemToCartHandler = (item) => {
    setCart((prevState) => {
      const existingCartItemIndex = prevState.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...prevState];
        updatedCart[existingCartItemIndex].quantity++;
        persistCart(updatedCart);
        return updatedCart;
      }

      const updatedCart = [...prevState, { ...item, quantity: 1 }];
      persistCart(updatedCart);
      return updatedCart;
    });
  };

  const removeItemFromCartHandler = (itemId) => {
    setCart((prevState) => {
      const updatedCart = prevState.filter((item) => item.id !== itemId);
      persistCart(updatedCart);
      return updatedCart;
    });
  };

  const increaseItemHandler = (itemId) => {
    setCart((prevState) => {
      const updatedCart = [...prevState];
      const existingCartItemIndex = prevState.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      updatedCart[existingCartItemIndex].quantity++;
      persistCart(updatedCart);
      return updatedCart;
    });
  };

  const decreaseItemHandler = (itemId) => {
    setCart((prevState) => {
      const updatedCart = [...prevState];
      const existingCartItemIndex = prevState.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      updatedCart[existingCartItemIndex].quantity--;
      if (updatedCart[existingCartItemIndex].quantity === 0) {
        updatedCart.splice(existingCartItemIndex, 1);
      }
      persistCart(updatedCart);
      return updatedCart;
    });
  };

  const updateQuantityHandler = (itemId, quantity) => {
    setCart((prevState) => {
      const updatedCart = [...prevState];
      const existingCartItemIndex = prevState.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      updatedCart[existingCartItemIndex].quantity = quantity;
      persistCart(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        increaseItem: increaseItemHandler,
        decreaseItem: decreaseItemHandler,
        updateQuantity: updateQuantityHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
