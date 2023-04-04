import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';

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
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
`;

const CartItem = ({ item }) => {
  const { addItem } = useContext(CartContext);

  return (
    <Wrapper>
      <Container>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <Image src={item.image} alt={item.name} />
        <p>Brand: {item.brand}</p>
        
      </Container>
    </Wrapper>
  );
};

export default CartItem;
