import React from 'react';
import styled from 'styled-components';
import { ShoppingCart, Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishListContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  width: 200px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 80%;
  height: 60%;
  object-fit: contain;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.1rem;
  margin-bottom: auto;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`;

const BrandTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  padding: 0.2rem; 
`;

const Button = styled.button`
  border: none;
  background-color: white;
  border-radius: 5px;
  color: black;
  padding: 2px 3px;
  font-size: 12px;
  cursor: pointer;
`;

export function WishlistItem({ item }) {
  const { addItem } = useContext(CartContext);
  const { removeWishlistItem } = useContext(WishlistContext);

  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <BrandTitle>{item.brand}</BrandTitle>
          <Title>{item.name}</Title>
          <Price>Price: ${item.price}</Price>
        </TopContainer>
        <Image src={item.image} alt={item.name} />
        <ButtonContainer>
        <Button onClick={()=>removeWishlistItem(item)}>
          <Trash size={24} />
        </Button>
        <Button onClick={() => addItem(item)}>
          <ShoppingCart size={24} />
          
        </Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
}
