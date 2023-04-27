import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../features/CartSlice';
import styled from 'styled-components';
import { Trash } from 'phosphor-react';

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CartItemImage = styled.img`
  height: 100px;
  margin-right: 16px;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const CartItemBrand = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const CartItemPrice = styled.p`
  font-size: 18px;
`;

const CartItemColor = styled.p`
  font-size: 18px;
`;

const CartItemSize = styled.p`
  font-size: 18px;
`;

const CartItemCategory = styled.p`
  font-size: 18px;
`;

const CartItemQuantity = styled.p`
  font-size: 18px;
`;

const RemoveButton = styled.button`
  font-size: 18px;
  padding: 8px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TotalCounter = styled.div`
  margin-top: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.shoppingCart.items);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <CartPageContainer>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map(item => (
            <CartItem key={item.id}>
              <CartItemImage src={item.image} alt={item.name} />
              <CartItemDetails>
                <CartItemName>{item.name}</CartItemName>
                <CartItemBrand>Brand: {item.brand}</CartItemBrand>
                <CartItemPrice>Price: ${item.price}</CartItemPrice>
                <CartItemColor>Color: {item.color}</CartItemColor>
                {item.size && <CartItemSize>Size: {item.size}</CartItemSize>}
                <CartItemCategory>Category: {item.category}</CartItemCategory>
                <CartItemQuantity>Quantity: {item.quantity}</CartItemQuantity>
                <RemoveButton onClick={() => handleRemoveItem(item.id)}><Trash/></RemoveButton>
              </CartItemDetails>
            </CartItem>
          ))}
          <TotalCounter>Total: ${total}</TotalCounter>
        </div>
      )}
    </CartPageContainer>
  );
};

export default CartPage;
