import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faTasks } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css"
import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function Dashboard() {
  return (
    <div>
    <Layout/>
    <div className="Adminback">
    <div className="dashboard-container">
      <header>
        <h3>Dashboard</h3>
      </header>
      <div className="sidebar-content">
        <div className="widget">
        <div className="widget-title1" >
                  <Link to="/prof">
                    <FontAwesomeIcon icon={faUser}/>  Profiles
                  
                  </Link>
                </div>
        <div className="widget-title2" >
                  <Link to="/prof">
                    <FontAwesomeIcon icon={faBook}/>  Posts
                  </Link>
                </div>
        <div className="widget-title3" >
                  <Link to="/prof">
                    <FontAwesomeIcon icon={faTasks}/>  Destination
                  </Link>
                </div>
        <div className="widget-title4" >
                  <Link to="/prof">
                    <FontAwesomeIcon icon={faClipboardList}/>  Likes
                  </Link>
                </div>
        </div>
      </div>
    </div>
    </div>
</div>
  )
}
