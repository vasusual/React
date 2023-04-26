import React from 'react';
import styled from 'styled-components';
import { auth } from './auth/firsbase';
import SignOut from './auth/Signout';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const UserPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const UserPage = () => {
  const user = auth.currentUser;

  return (
    <CenteredDiv>
      <UserPageContent>
        <h1>Welcome to the User Page</h1>
        <p>{user ? `Signed in as ${user.email}` : 'Not signed in'}</p>
        <SignOut/>
      </UserPageContent>
    </CenteredDiv>

  );
};

export default UserPage;
