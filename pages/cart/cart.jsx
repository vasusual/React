import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './cartItem';

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
            
          ))}
          <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
        </>
      )}
    </div>
  );
};


