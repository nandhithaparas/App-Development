import React, { useState } from 'react'
import axios from 'axios'
import './Contact.css'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your backend
    axios.post('http://localhost:5054/contact/post', formData)
      .then((response) => {
        if (response.data) {
          //alert('Message Sent');
          nav("/dashboard ");
          setFormData({
            name: '',
            email: '',
            msg: '',
          });
        }
      })
      .catch((error) => {
        console.error('Failed to send the message:', error);
      });
  };

  return (
    <div className='contactbody'>
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="style.css" />
  {/* Fontawesome CDN Link */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="containercon">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt" />
          <div className="topic">Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt" />
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope" />
          <div className="topic">Email</div>
          <div className="text-one">codinglab@gmail.com</div>
          <div className="text-two">info.codinglab@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>
          If you have any work from me or any types of quries related to my
          tutorial, you can send me message from here. It's my pleasure to help
          you.
        </p>
        <form >
          <div className="input-box">
            <input type="text" 
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />
          </div>
          <div className="input-box">
            <input type="text"
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
          </div>
          <div className="input-box">
            <input type="text"
            placeholder="Message" 
            name="msg"
            value={formData.msg}
            onChange={handleChange}
            required/>
          </div>
          <div className="input-box message-box"></div>
          <div className="button">
            <input type="button" onClick={handleSubmit} defaultValue="Send Now" />
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Contact