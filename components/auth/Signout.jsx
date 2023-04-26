import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Button = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const SignOut = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/auth');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Container>
  );
};

export default SignOut;
