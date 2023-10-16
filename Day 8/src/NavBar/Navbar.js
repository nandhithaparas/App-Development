import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import logo from '../NavBar/Logo.jpg'

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
        <p > MENU</p>
      </div>
      <div className='boxs'>
        <p ><a style={{textDecoration:'none', color: 'black'}} href="#home">HOME</a></p>
      </div>
      <div className='boxs'>
        <p >TRAVEL</p>
      </div>
    </div>
    <div className="center-logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className='right-bar bars'>
      <div className='boxs'>
        <p > <a style={{textDecoration:'none', color: 'black'}}  href="#contact">CONTACT</a></p>
      </div>
      <div className='boxs'>
        <p > <a style={{textDecoration:'none', color: 'black'}} href="#portfolio">POSTS</a></p>
      </div>
      <div className='boxs'>
        <p onClick={() => {navigate('/')}}>LOG IN</p>
      </div>
    </div>
  </nav>
  </div>
  )
}
