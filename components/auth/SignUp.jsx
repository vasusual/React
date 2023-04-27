import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

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

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() 
  
  const signUp = (e) => {
    e.preventDefault();
    const auth = getAuth(); 
    
  
    if (email && password) {
      
      const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
      if (strongPasswordRegex.test(password)) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential)
            navigate('/') 
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        alert('Password must be at least 8 characters long, contain at least one capital letter, and one number.')
      }
    } else {
      alert('Please fill in both email and password fields.')
    }
  }

  return (
    <Container>
      <Form onSubmit={signUp}>
        <Title>Create an Account</Title>
        <Input type="email" placeholder='Enter your E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <Input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  )
}

export default SignUp
