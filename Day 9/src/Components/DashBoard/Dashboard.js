import React from 'react'
import "./Dashboard.css"
import { selectUser } from '../../Redux/userSlice';
import { useSelector } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import Table from './Table';
import Piechart from './Piechart';
import BarChart  from './Barchart';

export default function Dashboard() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  return (
  <div>
  <Navbar/>
  <Table/>
  <Piechart/>
  <BarChart/>
     <div className="dashboard">  
    <div className="sidebar">
      <h2>Dashboard</h2>
      <div className="sidebar-links">
        <div  className='tabs'> Home</div>
        <div className='tabs'>Posts</div>
        <div className='tabs'>Account</div>
        <div className='tabs'>Logout</div>
        <div className='tabs'>{username}</div>
      </div>
    </div>
    </div>
  </div>
  )
}
