import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom' 
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: white;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: teal;
  padding: 40px;
  border-radius: 10px;
`

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  color: teal;
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 24px;
  color: white;
`

const ErrorMessage = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: red;
`

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate() 

  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate('/') 
      })
      .catch((error) => {
        setError(error.message);
      })
  }

  return (
    <Container>
      <Form onSubmit={signIn}>
        <Title>Log In</Title>
        <Input type="email" placeholder='Enter your E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Log in</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  )
}

export default SignIn
