import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWishlistItem } from '../../features/WishListSlice';
import styled from 'styled-components';
import { ShoppingCart, Trash } from 'phosphor-react';
import { addItem } from "../../features/CartSlice";

const WishlistPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WishlistItem = styled.li`
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

const WishlistItemImage = styled.img`
  height: 100px;
  margin-right: 16px;
`;

const WishlistItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const WishlistItemName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const WishlistItemBrand = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const WishlistItemPrice = styled.p`
  font-size: 18px;
`;

const WishlistItemColor = styled.p`
  font-size: 18px;
`;

const WishlistItemSize = styled.p`
  font-size: 18px;
`;

const WishlistItemCategory = styled.p`
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
const AddToCartButton = styled.button`
  font-size: 18px;
  padding: 8px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const WishlistPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.wishlist.items);

  const handleRemoveItem = (itemId) => {
    dispatch(removeWishlistItem(itemId));
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };
  

  return (
    <WishlistPageContainer>
      <h2>Wishlist</h2>
      {items.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div>
          {items.map(item => (
            <WishlistItem key={item.id}>
              <WishlistItemImage src={item.image} alt={item.name} />
              <WishlistItemDetails>
  <WishlistItemName>{item.name}</WishlistItemName>
  <WishlistItemBrand>Brand: {item.brand}</WishlistItemBrand>
  <WishlistItemPrice>Price: ${item.price}</WishlistItemPrice>
  <WishlistItemColor>Color: {item.color}</WishlistItemColor>
  {item.size && <WishlistItemSize>Size: {item.size}</WishlistItemSize>}
  <WishlistItemCategory>Category: {item.category}</WishlistItemCategory>
  <div>
    <AddToCartButton onClick={handleAddToCart}><ShoppingCart/></AddToCartButton>
    <RemoveButton onClick={() => handleRemoveItem(item.id)}><Trash/></RemoveButton>
  </div>
</WishlistItemDetails>

            </WishlistItem>
          ))}
        </div>
      )}
    </WishlistPageContainer>
  );
};

export default WishlistPage;
