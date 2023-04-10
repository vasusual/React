import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import { Trash } from 'phosphor-react';

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
  height: 400px; 
  border: 1px solid teal;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 70%;
  height: 50%;
  object-fit: contain;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* added to create more space */
  gap: 0.2rem;
  margin-top: 0.2rem;
  margin-bottom: auto;
  height: 80%; /* added to create more space */
`;

const Size = styled.p`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  margin-bottom: 0;
`;

const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`;

const Brand = styled.p`
  font-size: 0.6rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const Price = styled.p`
  font-size: 1rem;
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

const CountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CountButton = styled.button`
  background-color: teal;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 0 10px;
  cursor: pointer;
`;

const Count = styled.span`
  font-size: 0.6rem;
  font-weight: bold;
  margin-top: 0.5rem; 
`;

const CartItem = ({ item }) => {
  const { removeItem, increaseItem, decreaseItem, updateQuantity } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(item.id);
  };

  const handleIncreaseItem = () => {
    increaseItem(item.id);
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseItem = () => {
    if (item.quantity > 1) {
      decreaseItem(item.id);
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <Title>{item.name}</Title>
          <Brand>Brand: {item.brand}</Brand>
          <Price>Price: ${item.price}</Price>
          <Size>Size: {item.size}</Size> 
          <CountContainer>
            <CountButton onClick={handleDecreaseItem}>-</CountButton>
            <Count> {item.quantity}</Count>
            <CountButton onClick={handleIncreaseItem}>+</CountButton>
          </CountContainer>
        </TopContainer>
        <Image src={item.image} alt={item.name} />
        <ButtonContainer>
          <Button onClick={handleRemoveItem}><Trash size={30}/></Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default CartItem;
