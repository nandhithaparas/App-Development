import React from 'react'
import "./Dashboard.css"

export default function Dashboard() {
  return (
  <div>
     <div className="dashboard">
    <div className="sidebar">
      <h2>Dashboard</h2>
      <div className="sidebar-links">
        <div  className='tabs'>Home</div>
        <div className='tabs'>Posts</div>
        <div className='tabs'>Account</div>
        <div className='tabs'>Logout</div>
      </div>
    </div>
    </div>
  </div>
  )
}
