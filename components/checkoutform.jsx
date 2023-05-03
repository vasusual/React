import React, { useContext, useState } from 'react';
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
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CheckOutForm = () => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);
  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    postCode: '',
  });

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    clearCart();
    navigate('/thankyou');
  };

  const isSubmitDisabled = Object.values(formValues).some(value => !value);

  return (
    <CheckOutFormBox>
      <Title>Fill in your details</Title>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Enter your name *</Label>
          <Input type="text" name="name" value={formValues.name} onChange={handleChange} required />
        </InputContainer>
        <InputContainer>
          <Label>Enter your last name *</Label>
          <Input type="text" name="lastName" value={formValues.lastName} onChange={handleChange} required />
        </InputContainer>
        <InputContainer>
          <Label>Enter your E-mail *</Label>
          <Input type="email" name="email" value={formValues.email} onChange={handleChange} required />
        </InputContainer>

      <InputContainer>
        <Label>Enter your phone number*\</Label>
        <Input type="tel" name="tel" value={formValues.tel} onChange={handleChange} required />
      </InputContainer>
      <InputContainer>
        <Label>Enter your Country*</Label>
        <Input type="text" name="country" value={formValues.country} onChange={handleChange} required />
      </InputContainer>
      <InputContainer>
        <Label>Enter your city*</Label>
        <Input type="text" name="city" value={formValues.city} onChange={handleChange} required />
      </InputContainer>
      <InputContainer>
        <Label>Enter your address*</Label>
        <Input type="text" name="address" value={formValues.address} onChange={handleChange} required />
      </InputContainer>
      <InputContainer>
        <Label>Enter your Post Code*</Label>
        <Input type="text" name="postcode" value={formValues.postCode} onChange={handleChange} required />
      </InputContainer>
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </CheckOutFormBox>
  )}

export default CheckOutForm;
