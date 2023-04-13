import React from 'react'
import { useState } from 'react'
import {  signInWithEmailAndPassword,getAuth } from 'firebase/auth'
import { app } from 'firebase/app'
import { auth } from './firsbase'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log In</h1>
        <input type="email" placeholder='Enter your E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default SignIn
