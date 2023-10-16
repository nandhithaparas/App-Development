import React from 'react';
import './Home.css';
import NavbarHome from '../NavBar/NavBarHome';


export default function Home() {
  return (
    
    <div >
    <NavbarHome/>
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
          <div className="block text-center">
              <img src='https://i.ytimg.com/vi/v7cPHWQ-lsY/maxresdefault.jpg' 
              height='500vh' width='1200vh' alt='himg'/>    
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
                My main interest at this time lies in frontend development with
                a focus on HTML, CSS, JavaScript, and jQuery. I am more dedicated
                to working on UI/UX design and development before delving into
                other interesting programming stuff.
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
      </div>

      {/* Contact Page */}
      <div id="contact">
        <div className="homecontainer">
          <div className="row">
            <div className="col-lg-12 text-center text-style">
              <h2>
                <strong>Contact Me</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="wrapper">
            <form method="post" className="ccform">
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-user fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-envelope fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-mobile-phone fa-2x" />
                </span>
                <input className="ccformfield" type="text" placeholder="Phone" />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-info fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-comment fa-2x" />
                </span>
                <textarea
                  className="ccformfield"
                  name="comments"
                  rows={6}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="ccfield-prepend submit">
                <input className="ccbtn" type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
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
  );
}
