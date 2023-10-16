import React, { useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Profile() {
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    url: '',
    description: '',
    name: '',
    email: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your backend
    axios.post('http://localhost:5052/profile/prof/post', formData)
      .then((response) => {
        if (response.data) {
          alert('Profile Created');
          nav("/account ");
          setFormData({
            url: '',
            description: '',
            name: '',
            email: '',
            about: '',
          });
        }
      })
      .catch((error) => {
        console.error('Failed to send the message:', error);
      });
  };

  return (
    <div className='createbody'>
    
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Form css grid</title>
  <link rel="stylesheet" type="text/css" href="main.css" />
  {/* fontawesome.cdn for ICONS*/}
  <link
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossOrigin="anonymous"
  />
  {/*animatecss.cdn for ANIMATION*/}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css"
  />
  <div className="container">
    <h1 className="brand">
      <span>Wanderlenses</span> Travel Photography 
    </h1>
    {/*animated bounceInLeft class for selection what will be animated*/}
    <div className="wrapper animated bounceInLeft">
      <div className="company-info">
        <h3>Explore Our Features</h3>
        <ul>
          <li>
            <i className="fa fa-road" /> see premium photos
          </li>
          <li>
            <i className="fa fa-phone" /> contact our guides
          </li>
          <li>
            <i className="fa fa-envelope" /> 
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>Create Account</h3>
        <form>
          <p>
            <label>Url</label>
            <input type="text"
            name="url" 
            value={formData.url}
            onChange={handleChange}
            required/>
          </p>
          <p>
            <label>Description</label>
            <input type="text" 
            name="description"
            value={formData.description}
            onChange={handleChange}
            required />
          </p>
          <p>
            <label>Name</label>
            <input type="text"
             name="name" 
             value={formData.name}
            onChange={handleChange}
            required
             />
          </p>
          <p>
            <label>Email</label>
            <input type="email"
             name="email" 
             value={formData.email}
            onChange={handleChange}
            required/>
          </p>
          <p className="full">
            <label>About</label>
            <textarea name="about" 
            value={formData.about}
            onChange={handleChange}
            required
            rows={5} defaultValue={""} />
          </p>
          <p className="full">
            <button   onClick={handleSubmit}>Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>


    </div>
  )
}
