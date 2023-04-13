import React from 'react'
import { useState } from 'react'
import {  createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signUp = (e) => {
    e.preventDefault();
    const auth = getAuth(); // Use the getAuth() method without passing an argument
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='sign-in-container'>
      <form onSubmit={signUp}>
        <h1>Create an Account</h1>
        <input type="email" placeholder='Enter your E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
