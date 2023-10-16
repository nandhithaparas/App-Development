import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';
import jsCookie from 'js-cookie';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { googleProvider,auth } from '../Firebaseconfig';
import { setRole, setToken, setemail } from './LocalStorage';
import axios from 'axios';

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
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const submithandler=(e)=>{
    e.preventDefault();
    if(email&&password)
    {
      dispatch(login(email));
      nav("/home")
    }
  }
  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });
    
      const userCredentials = {
        email: email,
        password: password
      };
      axios.post("http://localhost:8081/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType==="USER"){
                nav("/home");
              }
              else if(userType==="PHOTOGRAPHER"){
                nav('/profile')
              }
              else if(userType==="ADMIN"){
                nav('/dashboard')
              }
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

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
          <input type="email" value={email}  onChange={handleEmailChange} placeholder="Email" />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" value={password}  onChange={handlePasswordChange} placeholder="Password" />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>
        <Link style={{textDecoration:'none',color:'darkblue'}} to="/">Forgot Password</Link>
        <input onClick={validate} className="signup-btn"  type="submit" value="LOGIN" />
      </form>
   <img onClick={handleGoogleLogin} width="50" height="50" src="https://img.icons8.com/clouds/100/google-logo.png" alt="google-logo"/>
    <br/>
    <Link to='/signup'style={{textDecoration:'none'}} ><p > No Account? Signup Now!</p></Link> 
      
    </div>
    </div>
    </div>
  )
}
