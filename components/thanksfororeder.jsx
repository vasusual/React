import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ThanksForOrder = () => {
  const orderNumber = Math.floor(Math.random() * 100000) + 1;
  return (
    <Container>
      <TextContainer>
        <h1>Thank You for Your Order!</h1>
        <h2>Your order number is #{orderNumber}</h2>
        <p>
          We appreciate your business and hope you enjoy your purchase. If you
          have any questions or concerns, please don't hesitate to contact us.
        </p>
        <p>You can check your order status in the Order page</p>
        <p>We look forward to serving you again in the future!</p>
      </TextContainer>
      <ButtonContainer>
        <Button as={Link} to="/">
          Go back to Home Page
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: teal;
`;

const TextContainer = styled.div`
  text-align: center;
  padding: 2rem;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: white;
  color: teal;
  border: none;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default ThanksForOrder;
