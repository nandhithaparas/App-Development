import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import logo from './Logo.jpg'

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    let navbarClass = 'navbar-dashboard';
    if(location.pathname === '/' )
      navbarClass = 'navi'

  return (
    <div> <nav className={navbarClass}>
    <div className='left-bar bars'>
      <div className='boxs'>
        <p> MENU</p>
      </div>
      <div className='boxs'>
        <p ><Link style={{textDecoration:'none', color: 'black'}} to="/home">HOME</Link></p>
      </div>
      <div className='boxs'>
        <p ><Link style={{textDecoration:'none', color: 'black'}} to="/guide">GUIDES</Link></p>
      </div>
    </div>
    <div className="center-logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className='right-bar bars'>
      <div className='boxs'>
        <p><Link style={{textDecoration:'none', color: 'black'}} to="/profile">PROFILES</Link></p>
      </div>
      <div className='boxs'>
        <p><Link style={{textDecoration:'none', color: 'black'}} to="/feedback">FEEDBACK</Link></p>
      </div>
      <div className='boxs'>
        <p onClick={() => {navigate('/')}}>LOGOUT</p>
      </div>
    </div>
  </nav>
  </div>
  )
}
