import React, { useState } from 'react';

export const CartContext = React.createContext({
  cart: [],
  addItem: (item) => {},
  removeItem: (itemId) => {},
  increaseItem: (itemId) => {},
  decreaseItem: (itemId) => {},
});

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItemToCartHandler = (item) => {
    setCart((prevState) => [...prevState, {...item, quantity: 1}]);
  };

  const removeItemFromCartHandler = (itemId) => {
    setCart((prevState) => prevState.filter(item => item.id !== itemId));
  };

  const increaseItemHandler = (itemId) => {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
 
  const decreaseItemHandler = (itemId) => {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const updateQuantityHandler = (itemId, quantity) => {
    setCart((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item
      )
    );
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
