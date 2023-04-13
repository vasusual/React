import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CheckOutFormBox = styled.div`
  background-color: teal;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 30px;
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  color: white;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px;
`;

const Select = styled.select`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 1px;
  color: white;
  background-color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CheckOutForm = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const handleSubmit = () => {
    clearCart();
    navigate('/thankyou');
  };

  return (
    <CheckOutFormBox>
      <Title>Fill in your details</Title>
      <InputContainer>
        <Label>Enter your name</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>Enter your last name</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>Enter your E-mail</Label>
        <Input type="email" />
      </InputContainer>
      <InputContainer>
        <Label>Enter your phone number</Label>
        <Input type="tel" />
      </InputContainer>
      <InputContainer>
        <Label>Enter your Country</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>Enter your city</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>Enter your address</Label>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <Label>Enter your Post Code</Label>
        <Input type="text" />
      </InputContainer>
      <Button onClick={handleSubmit}>Submit</Button>
    </CheckOutFormBox>
  );
};

export default CheckOutForm;
