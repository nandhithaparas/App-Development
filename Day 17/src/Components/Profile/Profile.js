import React from 'react'
import { Link } from 'react-router-dom'
import "./Profile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../NavBar/Navbar';

export default function Profile() {
  return (
    <div>
      <Navbar/>

      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <h3 className='pp'>
        Photographers Profile
      </h3>

      <div className="container123" style={{ marginLeft: '10%', marginRight: '10%' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            {/* Section Heading*/}
            <div
              className="section_heading text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              <div className="line" />
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Advisor - Row 1 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              {/* Team Thumb */}
             
                <div className="advisor_thumb">
                
                  <img
                    src="https://i.postimg.cc/rwyJN8gW/soci-1.webp"
                    alt=""
                  />
                  {/* Social Info */}
                  <div className="social-info">
                  <a  href="https://www.facebook.com/"
                  target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook" />
                    </a>
                    <a  href="https://twitter.com/home"
                    target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              
              {/* Team Details */}
              <Link to="/profile1"   style={{textDecoration:'none' , color:'black'}}>
              <div className="single_advisor_details_info">
                <h6>Luice Lilly</h6>
                <p className="designation">Photographer at Behance</p>
              </div>
              </Link> 
            </div>
          </div>
          {/* Single Advisor - Row 1 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              {/* Team Thumb */}
              <Link to="/profile2">
                <div className="advisor_thumb">
                  <img
                    src="https://i.postimg.cc/cCgqHRtx/wert.jpg"
                    alt=""
                  />
                  {/* Social Info */}
                  <div className="social-info">
                  <a  href="https://www.facebook.com/"
                  target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook" />
                    </a>
                    <a  href="https://twitter.com/home"
                    target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </Link>
              {/* Team Details */}
              <div className="single_advisor_details_info">
                <h6>Katrina</h6>
                <p className="designation">Wedding Photography</p>
              </div>
            </div>
          </div>
          {/* Single Advisor - Row 1 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp"
              }}
            >
              {/* Team Thumb */}
              <Link to="/profile3">
                <div className="advisor_thumb">
                  <img
                    src="https://i.postimg.cc/HWydTmwQ/oih.jpg"
                    alt=""
                  />
                  {/* Social Info */}
                  <div className="social-info">
                  <a  href="https://www.facebook.com/"
                  target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook" />
                    </a>
                    <a  href="https://twitter.com/home"
                    target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </Link>
              {/* Team Details */}
              <div className="single_advisor_details_info">
                <h6>Victoria</h6>
                <p className="designation">Landscape Photographer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Advisor - Row 2 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              {/* Team Thumb */}
              <div className="advisor_thumb">
                <img
                  src="https://i.postimg.cc/3w4b28J1/asdfgh.jpg"
                  alt=""
                />
                {/* Social Info */}
                <div className="social-info">
                <a  href="https://www.facebook.com/"
                target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook" />
                  </a>
                  <a  href="https://twitter.com/home"
                  target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
              {/* Team Details */}
              <div className="single_advisor_details_info">
                <h6>Emma</h6>
                <p className="designation">Fine-art Photographer</p>
              </div>
            </div>
          </div>
          {/* Single Advisor - Row 2 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              {/* Team Thumb */}
              <div className="advisor_thumb">
                <img
                  src="https://i.postimg.cc/8kmwJKVj/rth.webp"
                  alt=""
                />
                {/* Social Info */}
                <div className="social-info">
                <a  href="https://www.facebook.com/"
                target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook" />
                  </a>
                  <a  href="https://twitter.com/home"
                  target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
              {/* Team Details */}
              <div className="single_advisor_details_info">
                <h6>Rose</h6>
                <p className="designation">Professional Photographer</p>
              </div>
            </div>
          </div>
          {/* Single Advisor - Row 2 */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div
              className="single_advisor_profile wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              {/* Team Thumb */}
              <div className="advisor_thumb">
                <img
                  src="https://i.postimg.cc/brSzMDP5/red.jpg"
                  alt=""
                />
                {/* Social Info */}
                <div className="social-info">
                <a  href="https://www.facebook.com/"
                target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook" />
                  </a>
                  <a  href="https://twitter.com/home"
                  target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
              {/* Team Details */}
              <div className="single_advisor_details_info">
                <h6>Jennie</h6>
                <p className="designation">Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
