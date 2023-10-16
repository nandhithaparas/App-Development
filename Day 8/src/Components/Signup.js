import React from 'react'

export default function Signup() {
  return (
    <div className="login">
    <div className="form">
    <div className="box">
      <div className="header">
        <h2>Sign Up</h2>
      </div>
    
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email"  placeholder="Email" />
      </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <input className="signup-btn"  type="submit" value="SIGNUP" />
      </form>
    <p style={{textDecoration:'none'}} > Already Have an account? Login</p>
      
    </div>
    </div>
    </div>
  )
}
