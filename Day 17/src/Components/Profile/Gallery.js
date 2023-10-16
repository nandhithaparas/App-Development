import React from 'react'
import './Gallery.css'
import { Link} from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Dashboard from '../DashBoard/Dashboard';



function Gallery() {
  return (
    <div>
   <Navbar/>
   <Dashboard/>
  {/*Bootstrap CDN*/}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    type="text/css"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossOrigin="anonymous"
  />
  {/*CDN End Here*/}
  <div className='name3'><h1>BEST VACATIONAL SPOTS</h1> </div>
  <div className="container">
    <div className="rowgallery">
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://i.pinimg.com/736x/c5/f2/53/c5f253dc65092633317e53d3f9211131.jpg"
              alt="image9"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              SOUTH KOREA
              <span>The land of morning calm</span>
            </h2>
            <ul className="social-link">
              <p>
              <Link to='/southkorea' className="read-more-link">Read more</Link>
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://www.livelikeitstheweekend.com/wp-content/uploads/2019/08/Best-Photography-Spots-Rome_-4.jpg"
              alt="image8"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              ROME
              <span>The city of seven hills</span>
            </h2>
            <ul className="social-link">
              <Link to='/rome' className="read-more-link1">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
              alt="image7"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              PARIS
              <span>The city of Love</span>
            </h2>
            <ul className="social-link">
            <Link to='/paris' className="read-more-link2">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="image6"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              AUSTRALIA
              <span>The Land down under</span>
            </h2>
            <ul className="social-link">
            <Link to='/australia' className="read-more-link3">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?cs=srgb&dl=pexels-chris-czermak-2444403.jpg&fm=jpg"
              alt="image5"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              SWITZERLAND
              <span>The Land of milk and honey</span>
            </h2>
            <ul className="social-link">   
              <Link to='/australia' className="read-more-link3">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRoYWlsYW5kfGVufDB8fDB8fHww&w=1000&q=80"
              alt="image4"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              THAILAND
              <span>The Land of smiles</span>
            </h2>
            <ul className="social-link">
            <Link to='/australia' className="read-more-link3">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-18fc1c9297716d8ffcb37d793ee07113.webp"
              alt="image3"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              INDIA
              <span>The Land of Diversity</span>
            </h2>
            <ul className="social-link">
            <Link to='/australia' className="read-more-link3">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://mymodernmet.com/wp/wp-content/uploads/2018/03/hiro-goto-japan-photography-13.jpg"
              alt="image2"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
                JAPAN
              <span>Land of the Rising Sun</span>
            </h2>
            <ul className="social-link">
            <Link to='/australia' className="read-more-link3">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <div className="profile-card">
          <div className="profile-img">
            <img
              src="https://thirdeyetraveller.com/wp-content/uploads/LUXORITINERARY-14-of-16-689x919.jpg"
              alt="image1"
            />
          </div>
          <div className="profile-content">
            <h2 className="title">
              EGYPT
              <span>The Land of the Pharaohs</span>
            </h2>
            <ul className="social-link">
            <Link to='/australia' className="read-more-link3">Read more</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}
export default Gallery
