import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './cartItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background-color: teal;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
`;

export const Cart = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  const handleIncreaseItem = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseItem = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleIncreaseItem={() => handleIncreaseItem(item)}
              handleDecreaseItem={() => handleDecreaseItem(item)}
            />
          ))}
          <p>Total: ${getTotalPrice()}</p>
          <Button as={Link} to="/">Continue Shopping</Button>
          <Button>CheckOut</Button>
        </>
      )}
    </div>
  );
};

