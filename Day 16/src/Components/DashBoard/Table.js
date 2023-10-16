import React from 'react';
import "./Table.css"


const users = [
  {
    name: 'John Doe',
    username: 'joedoe12',
    email: 'joe2gmail.com',
    noofposts: 'Male',
    usage: '75%',
    follow: '123,456',
  
  },
  {
    name: 'John Doe',
    username: 'joedoe12',
    email: 'joe2gmail.com',
    noofposts: 'Male',
    usage: '75%',
    follow: '123,456',
  
  },
  {
    name: 'John Doe',
    username: 'joedoe12',
    email: 'joe2gmail.com',
    noofposts: 'Male',
    usage: '75%',
    follow: '123,456',
  
  }
];

const Table = () => {
  return (
    <div >
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Number Of Posts</th>
          <th>Usage Percentage</th>
          <th>Followers</th>
         
          
        </tr>
      </thead>
      <tbody>
        {users.map((s, index) => (
          <tr key={index}>
            <td>{s.name}</td>
            <td>{s.username}</td>
            <td>{s.email}</td>
            <td>{s.noofposts}</td>
            <td>{s.usage}</td>
            <td>{s.follow}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;