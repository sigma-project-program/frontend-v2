
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Center, Heading, VStack, useColorMode, IconButton} from '@chakra-ui/react'

function Login() {

const [email,setEmail] = useState(''); 
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState(''); 
const navigate = useNavigate(); 

const updateemail = (event)=>{
    console.log(event.target.value)
    setEmail(event.target.value)
}

const setPasswordChange = (event)=>{
    console.log(event.target.value)
    setPassword(event.target.value)
}

const handlesubmit = (e)=>{
    e.preventDefault()
    let obj = {'email':email, 'password': password}

    axios.
    post('http://localhost:3001/', obj)
    .then(navigate('/homepage'))
    .catch()

}


return (

    <div>
    {errorMessage? <h1 style={{color:'red'}}> {errorMessage}</h1> : <></>} 
       <h1>Login</h1>
    <form onSubmit={handlesubmit}>
  <label>Email ID:- </label><br/>
  <input type="text"
  value = {email}
  onChange={updateemail}
  /><br/>
  <label>Password:-</label><br/>
  <input type="password"
   value = {password}
   onChange={setPasswordChange}
  />
  <br/>
  <button type="submit" style={{border:5}}>LOGIN</button>
</form>

  </div>
  )
}

export default Login