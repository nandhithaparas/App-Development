import React from 'react'
import "./Dashboard.css"
import { selectUser } from '../../Redux/userSlice';
import { useSelector } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import Table from './Table';

export default function Dashboard() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  return (
  <div>
  <Navbar/>
  <Table/>
     <div className="dashboard">  
    <div className="sidebar">
      <h2>Dashboard</h2>
      <div className="sidebar-links">
        <div  className='tabs'><Link style={{textDecoration:'none',color:'black'}} to='/home'> Home</Link></div>
        <div className='tabs'><Link style={{textDecoration:'none',color:'black'}} to='/analysis'> Analysis</Link></div>
        <div className='tabs'><Link style={{textDecoration:'none',color:'black'}} to='/profile'> Account</Link></div>
        <div className='tabs'>{username}</div>
      </div>
    </div>
    </div>
  </div>
  )
}
