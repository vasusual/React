import React, { useContext } from 'react';
import styled from 'styled-components';
import { WishlistContext } from '../../context/WishListContext';
import { WishlistItem } from './wishlist-item';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export function Wishlist({ onRemove }) {
  const { wishlistItems } = useContext(WishlistContext);

  return (
    <Wrapper>
      <Title>Wishlist</Title>
      {wishlistItems.length === 0 && <p>Your wishlist is empty.</p>}
      {wishlistItems.map((item) => (
        <WishlistItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </Wrapper>
  );
}
