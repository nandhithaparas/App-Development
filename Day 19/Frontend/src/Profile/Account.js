import React, { useEffect } from 'react'
import "./Account.css"
import { useState } from 'react';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

export default function Account() {

  const userEmail = localStorage.getItem('email');
  const usernam = userEmail.split('@')[0];

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
  
  const useremail = localStorage.getItem('email');
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all data using Axios when the component mounts
    axios
    .get(`http://localhost:5052/profile/get/prof?email=${useremail}`)
    .then((response) => {
      setDataList(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    });
}, []);
  const filteredData = dataList.filter(item => item.email === localStorage.getItem('email'));


    
  return (
    <div>
    <div className='profilepage'>
    <header>
      <div className="containerpro">
        <div className="profile">
          <div className="profile-image">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              
              {filteredData.map(item => (
                <div key={item.email}>
             
            <img 
              src={item.url}
              alt="profph"
              height='200px'
              width='200px'
            />
            </div>
            ))}
            </div>
          )}
          </div>
          <div className="profile-user-settings">
          
            <h1 className="profile-user-name">{usernam || 'Loading...'}_03</h1>
            <button className="btn profile-edit-btn">Edit Profile</button>
            <button
              className="btn profile-settings-btn"
              aria-label="profile settings"
            >
              <i className="fas fa-cog" aria-hidden="true" />
            </button>
          </div>
          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">164</span> posts
              </li>
              <li>
                <span className="profile-stat-count">188</span> followers
              </li>
              <li>
                <span className="profile-stat-count">206</span> following
              </li>
            </ul>
          </div>
          <div className="profile-bio">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              
              {filteredData.map(item => (
                <div key={item.email}>
                  <p>{item.description}</p>
            <p>
              <span className="profile-real-name">{item.name}_03</span> {item.about} 📷✈🏕

            </p>
            </div>
              ))}
            </div>
          )}
          </div>
        </div>
        {/* End of profile section */}
      </div>
      {/* End of container */}
    </header>
    <main>
      <div className="profcont">
        <div className="gallery">
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 56
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 2
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 89
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 5
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Gallery</span>
              <i className="fas fa-clone" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 42
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 1
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Video</span>
              <i className="fas fa-video" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 38
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 0
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Gallery</span>
              <i className="fas fa-clone" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 47
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 1
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 94
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 3
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Gallery</span>
              <i className="fas fa-clone" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 52
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 4
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 66
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 2
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Gallery</span>
              <i className="fas fa-clone" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 45
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 0
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 34
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 1
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 41
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 0
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Video</span>
              <i className="fas fa-video" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> 30
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true" /> 2
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End of gallery */}
        <div className="loader" />
      </div>
      {/* End of container */}
    </main>
  
  </div>
  </div>
  )
}
