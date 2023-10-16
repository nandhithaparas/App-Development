import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    
    <div className="login">
    
    <div className="form">
    <div className="box">
      <div className="header">
        <h2>Login</h2>
      </div>
    
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input className="signup-btn"  type="submit" value="LOGIN" />
      </form>
    <p style={{textDecoration:'none'}} > No Account? Signup Now!</p>
      
    </div>
    </div>
    </div>
  )
}
