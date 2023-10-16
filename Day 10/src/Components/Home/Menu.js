import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div />
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
              <Link to='/home' style={{textDecoration:'none'}}>Home</Link> 
              </li>
              <li>
              <Link to='/profile' style={{textDecoration:'none'}}>Profiles</Link> 
              </li>
              <li>
              <Link to='/faq' style={{textDecoration:'none'}}>FAQ</Link> 
              </li>
              <li>
              <Link to='/signup' style={{textDecoration:'none'}}>Workshops</Link> 
              </li>
              <li>
              <Link to='/tips' style={{textDecoration:'none'}}>Travel Tips</Link> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  
  </div>
  )
}
