import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

export default function Signup() {
  const nav=useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[conPassword,setConPassword]=useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    conPassword: '',
    terms: '',
  });


  const handleInputChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'conPassword':
        setConPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (name.length === 0) {
      errors.name = 'Name is required';
    }

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (conPassword.length === 0) {
      errors.conPassword = 'Confirm Password is required';
    } else if (password !== conPassword) {
      errors.conPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({
        name: '',
        email: '',
        password: '',
        conPassword: '',
        terms: '',
      });

      
      const user = {
        email,
        password: password, 
        role: 'user',
        name,
      };

      console.log("user data",user)
      axios.post('http://localhost:8081/auth/register', user, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        alert("User Registered! Kindly Login to proceed")
        console.log("Response from user",response)
        nav("/")
        
      })
      .catch(error => {
        console.log(error);
      alert(error.response)
      });
      
    }
  };

  return (
    <div className="login">
    <div className="form">
    <div className="box">
      <div className="header">
      <img width="50" height="50" src="https://img.icons8.com/clouds/100/login-rounded-right.png" alt="login-rounded-right"/>
      <h1>SIGN UP</h1>
      </div>
    
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text"    onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Name" />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>
        <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email"  onChange={(e) => handleInputChange('email', e.target.value)}   placeholder="Email" />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
      </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password"   onChange={(e) => handleInputChange('password', e.target.value)} placeholder="Password" />
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password"   onChange={(e) => handleInputChange('conPassword', e.target.value)} placeholder="Confirm Password" />
          {formErrors.conPassword && (<p className="error">{formErrors.conPassword}</p>)}
        </div>
        <input onClick={validate} className="signup-btn"  type="submit" value="SIGNUP" />
      </form>
    <p style={{textDecoration:'none'}} > <Link to='/' style={{textDecoration:'none',color:'darkblue'}}>Already Have an account? Login</Link></p>
      
    </div>
    </div>
    </div>
  )
}
