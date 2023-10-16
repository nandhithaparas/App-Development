import React from 'react'
import "../Profile/Profile"
import Navbar from '../NavBar/Navbar'

export default function Tips() {
  return (
    <div><Navbar/>
   <br/>
   <br/>
   <br/>
   
   <div className="projects-main-content">
   <div className='projects-welcome'>
     <h1>Travel Tips</h1><br/>
    <p><br/>Travel + Leisure's writers and editors know how stressful planning family vacations can be,
     but also how stress-free they should be. With a discerning eye for value, multigenerational fun, and simplicity, 
     they can help reduce the hassle and maximize the memories. Whether you are looking to travel with young infants or toddlers, 
     high-energy elementary schoolers, angst-ridden teens, or an extended family group,
     the perfect family vacation is out there, just waiting for you to find it.
  
    <h2><br/>Coomon Tips<br/></h2>
<h3 className='things'>**The Things You Should Know About </h3>
Looking for the perfect weekend getaway? Whether you want to hit the beach for a long weekend or explore a new city, Travel + Leisure has travel tips, news, and information about the most exciting destinations for the best weekend getaways. Our weekend getaway ideas cover road trips, beach vacations, city breaks, and more from coast to coast.</p>

   </div>
   <div className='projects-projects'>
     <div className="projects-project-card">
       <img src="https://cdn.enjoytravel.com/img/travel-news/algeria-is-the-largest-african-nation.jpg" alt="Project 1" />
       <h3><br/>Family Travel</h3><br/>
       <p>With a discerning eye for value, multigenerational fun, and simplicity, they can help reduce the hassle and maximize the memories.
       </p>
     </div>

     <div className="projects-project-card">
       <img src="https://cdn.enjoytravel.com/img/travel-news/algeria-boasts-seven-unesco-sites.jpg" alt="Project 2" />
       <h3><br/> Weekend Gateways</h3><br/>
       <p>Our weekend getaway ideas cover road trips, beach vacations, city breaks, and more from coast to coast.</p>
     </div>
    
   </div>
  
     
 </div>
 <div id="footer">
 <div className="container footer-position">
   <div className="row">
     <div className="col-md-12">
       <span>© Photography Tips TV 2022</span>
     </div>
   </div>
 </div>
</div>
 </div>
  )
}
