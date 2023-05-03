import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';
import { auth } from './firsbase';

const CenteredTealDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: teal;
`;

const StatusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: white;
`;

const AuthButton = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: teal;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Auth = () => {
  const user = useContext(UserContext);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <>
      <StatusDiv>
        <p>{user ? `Signed in as ${user.email}` : 'Not signed in'}</p>
      </StatusDiv>
     
    </>
  );
};

export default Auth;
