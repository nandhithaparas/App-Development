import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';
import jsCookie from 'js-cookie';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { googleProvider,auth } from '../Firebaseconfig';


export default function Login() {

  const handleGoogleLogin=async()=>{
    console.log("clicked  ")
    try{
        await signInWithPopup(auth,googleProvider)
        .then((result)=>{
            const user =result.user;
            console.log(user.displayName);
            console.log(user.email)
            jsCookie.set("UserEmail",user.email)
            console.log(user.emailVerified)
            const credential=GoogleAuthProvider.credentialFromResult(result);
            console.log(credential);
            let name=jsCookie.get("UserEmail");
            alert(name,"is present in js cookie")
            
     } )
    }catch(err){
       console.log(err);     
        }
    }

  const nav=useNavigate("");
  const dispatch=useDispatch("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const submithandler=(e)=>{
    e.preventDefault();
    if(username&&password)
    {
      dispatch(login(username));
      nav("/home")
    }
    if(username==='Admin'&&password==='Admin')
    {
      nav("/dashboard")
    }
  }
  return (
    
    <div className="login">
    
    <div className="form">
    <div className="box">
      <div className="header">
       <h1>LOGIN</h1>
      </div>
    
      <form onSubmit={submithandler}>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        </div>
        <input className="signup-btn"  type="submit" value="LOGIN" />
      </form>
   <img onClick={handleGoogleLogin} width="50" height="50" src="https://img.icons8.com/clouds/100/google-logo.png" alt="google-logo"/>
    <br/>
    <Link to='/signup' style={{textDecoration:'none'}}><p > No Account? Signup Now!</p></Link> 
      
    </div>
    </div>
    </div>
  )
}
