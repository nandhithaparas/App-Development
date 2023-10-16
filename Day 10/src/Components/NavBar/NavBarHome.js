import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import logo from './Logo.jpg'
import Menu from '../Home/Menu';

export default function NavbarHome() {
    const navigate = useNavigate();
    const location = useLocation();

    let navbarClass = 'navbar-dashboard';
    if(location.pathname === '/' )
      navbarClass = 'navi'

   
  return (
    <div> <nav className={navbarClass}>
    <div className='left-bar bars'>
      
      <div className='boxmenu'><Menu/></div>
      
      <div className='boxs'>
        <p ><a style={{textDecoration:'none', color: 'black'}} href='#portfolio' >GALLERIES</a></p>
      </div>
      <div className='boxs'>
       <Link to="/guide"> <p >GUIDES</p></Link>
      </div>
    </div>
    <div className="center-logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className='right-bar bars'>
      <div className='boxs'>
        <p > <a style={{textDecoration:'none', color: 'black'}} href='#contact' >CONTACT US</a></p>
      </div>
      <div className='boxs'>
        <p > <a style={{textDecoration:'none', color: 'black'}} href='#about'>ABOUT US</a></p>
      </div>
      <div className='boxs'>
        <p onClick={() => {navigate('/')}}>LOG OUT</p>
      </div>
    </div>
  </nav>
  </div>
  )
}
