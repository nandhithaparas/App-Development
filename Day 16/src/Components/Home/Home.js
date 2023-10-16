import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';
import { Link } from 'react-router-dom';


export default function Home() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email:'Guest';

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
    
    <div >
   
  
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Maitree|Montserrat|Calligraffitti|Playfair+Display|Sahitya|Source+Sans+Pro|Ubuntu"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
     

      {/* Home Page */}
      <div id="home">
        <div className="home-page">
          
          <header className='navhome'>
          <a href="#" className="logo">
            ​Wanderlenses
          </a>
          <nav className="navmenu"> {/* Updated class name */}
            <ul>
              <li>
                <Link to='/home' >Home</Link>
              </li>
              <li>
                <a href="#aboutus">About</a>
              </li>
              <li>
              <Link to='/profile' >Profile</Link>
              </li>
              <li>
              <Link to='/guide' >Guide</Link>
              </li>
              <li>
              <Link to='/contact' >Contact</Link>
              </li>
              <li>
              <Link to='/' >Logout</Link>
              </li>
            </ul>
          </nav>
          <div className="menuToggle"  onClick={ToggleMenu}><Menu/></div>
        </header>
        <section className="banner"></section>
       
        <div className="block text-center">
            <div className="btnList text-center">
              <a
                className="btn btn-twitter btn-lg"
                href="https://twitter.com/home"
                target="_blank" rel="noreferrer"
              >
                <i className="fa fa-twitter fa-fw" />
                Twitter
              </a>
              <a
                className="btn btn-linkedin btn-lg"
                href="https://www.linkedin.com"
                target="_blank" rel="noreferrer"
              >
                <i className="fa fa-linkedin fa-fw" />
                LinkedIn
              </a>
              <a
                className="btn btn-github btn-lg"
                href="https://github.com/"
                target="_blank" rel="noreferrer"
              >
                <i className="fa fa-github fa-fw" />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Page */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-style">
              <h2>
                <strong>About Me</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="row about-style">
            <div className="col-md-12 text-center about-info">
              <p>
            {email}
              We believe it’s important to “celebrate your story” 
              <br/>
              through beautiful photography.
              <br/>
              We’ve captured over 3 million memories for travellers across the globe 
              with our team of 500+ talented, professional photographers.
              </p>
              <br />
              <br />
              <p>
              The idea for Flytographer was inspired by a trip to Paris in 2011 with two best friends. Founder Nicole Smith wanted to come home with one good photo that captured their adventure together — and also showcased the beauty of the city. The idea was born.

              Flytographer officially launched in 2013 as a side hustle, all while Nicole worked full-time at her 
              corporate job and raised her two young kids. In the last 10 years, Flytographer has scaled across six continents, 
              hired 500+ photographers and our team has had the honour of capturing over 3 million memories for travellers. ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Page */}
      <div id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-style">
              <h2>
                <strong>GALLERIES</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 1 */}
              <img
                src="http://hd.wallpaperswide.com/thumbs/california_road-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 2 */}
              <img
                src="http://hd.wallpaperswide.com/thumbs/empty_road_3-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 3 */}
              <img
                src="http://hd.wallpaperswide.com/thumbs/android_7-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 4 */}
              <img
                src="http://hd.wallpaperswide.com/thumbs/anonymous_mask_3-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 5 */}
              <img
                src="http://hd.wallpaperswide.com/thumbs/offline-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 6 */}
              <img
                src="http://hd.wallpaperswide.com/thumbs/jiuzhaigou_sichuan_china-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 7 */}
              <img
                src="https://hd.wallpaperswide.com/thumbs/odles_and_the_mastle_mountain_puez_geisler_nature_park_dolomites-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 8 */}
              <img
                src="https://hd.wallpaperswide.com/thumbs/brewer_pub_london-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 9 */}
              <img
                src="https://hd.wallpaperswide.com/thumbs/sunset_over_lake_siutghiol-t1.jpg"
                className="img-responsive"
                alt="#"
              />
            </div>
          </div>
        </div>
        <Footer/>
      </div>

      {/* Contact Page */}
     
    
    </div>
  );
}
