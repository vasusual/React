import React, { useState } from 'react';

export const CartContext = React.createContext({
  cart: [],
  addItem: (item) => {},
});

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItemToCartHandler = (item) => {
    setCart((prevState) => [...prevState, item]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItem: addItemToCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
