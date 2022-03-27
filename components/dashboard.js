import React from 'react'
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState,useEffect} from 'react'

function Dashboard({loggedin,setLoggedin, state, userobj,setUserobj}) {

   const navigate = useNavigate();

   const login = (e)=>{
       e.preventDefault() 
       navigate('/login')
   }

   const signupRe = (e)=>{
    e.preventDefault() 
    navigate('/signup/reviewer')
} 

  const signupAuthor = (e)=>{
    e.preventDefault() 
    navigate('/signup/author')
} 
   
    return(
        <div> Homepage <br/> 
        <div>
        <button onClick={login}> Login </button> <br/>
        <button onClick={signupRe}> SignUp-Reviewer </button>  <br/>
        <button onClick={signupAuthor}> SignUp-Author </button> <br/>
        </div>
        </div>
        
    ); 
      
}

export default Dashboard