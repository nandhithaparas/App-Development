import React from 'react'
import "./Tips.css"
import Navbar from '../NavBar/Navbar'


export default function Tips() {
  return (
    <div className='bodyt'>
    <Navbar/>
    <div id="container">
    {/* Start	Product details */}
    <div className="product-details">
      {/* 	Product Name */}
      <h1>Biru Putaran</h1>
      {/* 		<span class="hint new">New</span> */}
      {/* 		<span class="hint free-shipping">Free Shipping</span> */}
      {/* 		the Product rating */}
      <span className="hint-star star">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-half-o" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
      </span>
      {/* The most important information about the product */}
      <p className="information">
        " Especially good for container gardening, the Angelonia will keep
        blooming all summer even if old flowers are removed. Once tall enough to
        cut, bring them inside and you'll notice a light scent that some say is
        reminiscent of apples. "
      </p>
     
    </div>
    {/* 	End	Product details   */}
    {/* 	Start product image & Information */}
    <div className="product-image">
      <img
        src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg"
        alt="Omar Dsoky"
      />
      {/* 	product Information*/}
      <div className="info">
        <h2>The Description</h2>
        <ul>
          <li>
            <strong>Sun Needs: </strong>Full Sun
          </li>
          <li>
            <strong>Soil Needs: </strong>Damp
          </li>
          <li>
            <strong>Zones: </strong>9 - 11
          </li>
          <li>
            <strong>Height: </strong>2 - 3 feet
          </li>
          <li>
            <strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall
          </li>
          <li>
            <strong>Features: </strong>Tolerates heat
          </li>
        </ul>
      </div>
    </div>
    {/*  End product image  */}
  </div>
  </div>
  
  )
}
