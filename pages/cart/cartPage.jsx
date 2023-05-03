import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from './cartSlice';

const CartPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const CartPageTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const CartPageItems = styled.ul`
  list-style: none;
  padding: 0;
`;

const EmptyCartMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CartPage = ({ handleRemoveItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  // Загрузка сохраненного состояния корзины из локального хранилища
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      dispatch(setCartItems(JSON.parse(storedCartItems)));
    }
  }, [dispatch]);

  // Сохранение текущего состояния корзины в локальном хранилище
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartPageContainer>
      <CartPageTitle>Your Cart</CartPageTitle>
      {cartItems.length > 0 ? (
        <CartPageItems>
          {cartItems.map(item => (
            <CartItemComponent key={item.id} item={item} handleRemoveItem={handleRemoveItem} />
          ))}
        </CartPageItems>
      ) : (
        <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
      )}
    </CartPageContainer>
  );
};

export default CartPage;
