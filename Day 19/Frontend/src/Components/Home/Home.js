import React, { useEffect, useState } from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import { getEmail, getToken } from './LocalStorage';
import { Link, useNavigate } from 'react-router-dom';

function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
export default function Homen() {
  const[show,setshow]=useState(false);
  const toggle = () => {
    setshow(!show);
  };

  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

useEffect(() => {
  // Load the YouTube iframe API
  loadYouTubeAPI();

  // Function to create and play the YouTube video
  function onYouTubeIframeAPIReady() {
    const player = new window.YT.Player('youtubePlayer', {
      height: '360', // Set the player's height
      width: '640',  // Set the player's width
      videoId: '9E1rqgR0wp4', 
      playerVars: {
        autoplay: 1,  // Auto-play the video
      },
    });
  }

  // Call the YouTube API function when it's ready
  if (window.YT && window.YT.Player) {
    onYouTubeIframeAPIReady();
  } else {
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }
}, []);

const CryptoJS = require('crypto-js');
const [isValidityExpired,setValidity]=useState(true)
const Email=getEmail();
const useremail = Email.split('@')[0];

useEffect(()=>{
 
  try {
    const parts = token.split('.');
    const decodedPayload = CryptoJS.enc.Base64.parse(parts[1]).toString(CryptoJS.enc.Utf8);
    console.log(decodedPayload);
    const parsedPayload = JSON.parse(decodedPayload);
    if (parsedPayload.exp) {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (parsedPayload.exp < currentTimestamp) {
        alert("Session Expired. Please Login again....!")
        localStorage.clear();
        nav("/")
      }
    } else {
      console.log('JWT does not contain an expiration claim (exp).');
    }
  } catch (error) {
    console.error('Error decoding JWT:', error);
  }
},[])

  return (
    <div className='footer'>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  {/* Fontawesome Link for Icons */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
  />
  <div className='head'>
  <header>
    <nav className="navbar">
      <h2 className="logo">
        <a href="#">WANDERLENSES</a>
      </h2>
      <input type="checkbox" id="menu-toggler" />
      <label htmlFor="menu-toggler" id="hamburger-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
        </svg>
      </label>
      <ul className="all-links">
       
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='/profile'>Create Profile</Link>
        </li>
        
        <li>
          <Link to='/profile'>{useremail}</Link>
        </li>
        
        <li>
          <img onClick={toggle} width="50" height="50" src="https://img.icons8.com/bubbles/50/test-account.png" alt="test-account"/>
        </li>
      </ul>
    </nav>
    
  </header>
  
  </div>
  <section className="homepage" id="home">
    <div className="content">
    <i  class="dropdown icon"></i>
  {show && (
  <div className='menu1'>
        <div className="item">Google Docs</div>
        <div className="item">Google Drive</div>
        <div className="item">Dropbox</div>
        <div className="item">Adobe Creative Cloud</div>
        <div className="item">Private FTP</div>
        <div className="item">Another Service...</div>
    </div>
    )}
      <div className="text">
        <h1>Capitivating Travel Photography</h1>
        <h4>
        Explore real travel stories and tips from 
        <br/>thousands of customers around the world!
        </h4>
      </div>
      <a href="#services">Travel Stories</a>
    </div>
  </section>
  <section className="services" id="services">
    <h2>Explore our Top Destinations</h2>
    <p>Browse Flytographer portfolios in over 350 cities around the globe.</p>
    <ul className="cards">
      <li className="card">
        <img src="https://www.sotc.in/blog/wp-content/uploads/2023/04/Honeymoon-Destinations-in-India-in-May.jpg" alt="img" />
        <h3>Honolulu, USA</h3>
        <p>
        Warm tropical breezes and white sand beaches in Hawaii's biggest city
        </p>
      </li>
      <li className="card">
        <img src="https://buckhorncliffs.com/wp-content/uploads/2022/07/best-sleeping-bag-for-summer-camping.jpg" alt="img" />
        <h3>Tokyo, Japan</h3>
        <p>
        A modern metropolis with a side of tradition
        </p>
      </li>
      <li className="card">
        <img src="https://www.outdoorlife.com/uploads/2022/02/11/ColemanEventemp3-1024x768.jpeg" alt="img" />
        <h3>Jackson Hole, USA</h3>
        <p>
        An adventurous small town nestled amongst stunning mountains
        </p>
      </li>
      <li className="card">
        <img src="https://www.pandotrip.com/wp-content/uploads/2017/10/How-to-Choose-the-Best-Travel-Backpack-for-Women-6.jpg" alt="img" />
        <h3>Santorini, Greece</h3>
        <p>
        Stacks of white-washed houses crowned by blue-domed roofs
        </p>
      </li>
      <li className="card">
        <img src="https://hips.hearstapps.com/hmg-prod/images/campong-chairs-compilation-1648489527.jpg" alt="img" />
        <h3>New York City, USA</h3>
        <p>
        5 hip boroughs exude high-tempo flavour and diversity
        </p>
      </li>
      <li className="card">
        <img src="https://i.pinimg.com/736x/c5/96/da/c596dabb7ea3846ba181d17846172ebd.jpg" alt="img" />
        <h3>Cancun, Mexico</h3>
        <p>
        Warm azure waters and white sand beaches
        </p>
      </li>
    </ul>
  </section>
  <section className="portfolio" id="portfolio">
    <h2>Our Portfolio</h2>
    <p>Take a look at some of our memorable camping adventures.</p>
    <ul className="cards">
      <li className="card">
        <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/cover-for-Trekking-In-Kathmandu-e1582960550667.jpg" alt="img" />
        <h3>Mountain Hiking</h3>
        <p>
          Embark on an exhilarating hiking adventure in the breathtaking
          mountain ranges.
        </p>
      </li>
      <li className="card">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/42/8c/ce/caption.jpg?w=1200&h=-1&s=1" alt="img" />
        <h3>Lakeside Camping</h3>
        <p>
          Enjoy a tranquil camping experience by the serene shores of
          picturesque lakes.
        </p>
      </li>
      <li className="card">
        <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/5/26/0/shutterstock_camping-tent-activity-on-beach-1615352614.jpg.rend.hgtvcom.616.411.suffix/1653592300933.jpeg " alt="img" />
        <h3>Beach Camping</h3>
        <p>
          Escape to sandy beaches and camp under the starry sky by the crashing
          waves.
        </p>
      </li>
      <li className="card">
        <img src="https://img.freepik.com/premium-photo/adventurous-traveler-exploring-enchanting-forest-tr-14xjpg_835197-13906.jpg" alt="img" />
        <h3>Forest Exploration</h3>
        <p>
          Discover the wonders of lush forests and immerse yourself in nature's
          beauty.
        </p>
      </li>
      <li className="card">
        <img src="https://www.lakegeorgervpark.com/wp-content/uploads/2019/11/RVP_1921-C-600x400_c.jpg" alt="img" />
        <h3>RV Camping</h3>
        <p>
          Experience the freedom of road trips and camping adventures with our
          RV rentals.
        </p>
      </li>
      <li className="card">
        <img src="https://img.freepik.com/free-photo/burning-campfire-illuminates-tranquil-mountain-landscape-dusk-generated-by-ai_24640-81139.jpg" alt="img" />
        <h3>Desert Camping</h3>
        <p>
          Embark on a unique desert camping experience and witness stunning
          landscapes.
        </p>
      </li>
    </ul>
  </section>
  <section className="portfolio" id="aboutus">
  <h2>We believe it's important to  “celebrate your story”
  <br/> through beautiful photography.<br/><br/></h2>
  <h3>Our Story</h3>
  <ul className="cards">
  <div id="youtubePlayer"></div>
   
    <li className="card1">
      
      <h3>How it Started</h3>
      <p>
      <br/>
      The idea for Flytographer was inspired by a trip to Paris in 2011 with two best friends.
       Founder Nicole Smith wanted to come home with one good photo that captured their adventure 
       together — and also showcased the beauty of the city. The idea was born.
<br/><br/>
      Flytographer officially launched in 2013 as a side hustle, all while Nicole worked full-time at 
      her corporate job and raised her two young kids. In the last 10 years, Flytographer has scaled across six continents, 
      hired 500+ photographers and our team has had the honour of capturing over 3 million memories for travellers. ❤️
      </p>
    </li>
    <li className="card1">
      <p><br/><br/></p>
      <h3>Today</h3>
      <p>
      <br/>
      When the pandemic hit, our business stopped overnight. We, like many, had to reimagine,
       pivot, and ultimately expand ways of capturing the stories that matter to our customers … beyond travel.
<br/><br/>
We’ve since emerged stronger, more diversified (hello hometown shoots and headshots!), 
and deeply grateful we get to work with a community of awesome people doing work we love. 
Our HQ team, made up of 90% women, has expanded beyond the original core in Victoria BC, and become fully remote, 
with team members based in several cities between Honolulu and Montréal. ❤️
      </p>
    </li>
    <li className="card1">
    <p><br/><br/><br/></p>
        <img src="https://media.flytographer.com/uploads/2019/10/19091691619pm0055.jpg" width='420px'  height='250px' alt="img" />
        
        <p>
        Our community consists of our HQ team, our handpicked global photographers, customers, and partners. We share the common values of:
        </p>
      </li>
  </ul>
</section>

<Footer/>
    </div>
  )
}