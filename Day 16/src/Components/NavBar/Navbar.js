import React from 'react'
import "./Navbar.css"
import Menu from '../Home/Menu';

export default function Navbar() {
    function ToggleMenu(){
      const menuToggle = document.querySelector('.menuToggle');
      const navigation = document.querySelector('.navmenu'); // Updated class name
      menuToggle.classList.toggle('active');
      navigation.classList.toggle('active');
    }
    window.addEventListener("scroll",function(){
      var header = document.querySelector(".navhome"); // Updated class name
      header.classList.toggle('sticky', window.scrollY > 0);
    })
  return (
    <div>  <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <header className='navhome'>
      <a href="#" className="log">
        Wanderlenses
      </a>
      <nav className="navmenu"> {/* Updated class name */}
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="menuToggle"  onClick={ToggleMenu}><Menu/></div>
    </header>
   
  </div>
  )
}
