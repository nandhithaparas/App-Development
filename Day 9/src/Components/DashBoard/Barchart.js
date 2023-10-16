import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './Table.css'; // Import the CSS file

const Dashboard = () => {
  const data = [
    { Days: 'Day 1', Usage: 30 },
    { Days: 'Day 2', Usage: 40 },
    { Days: 'Day 3', Usage: 60 },
    { Days: 'Day 4', Usage: 70 },
    { Days: 'Day 5', Usage: 50 },
   
    
  ];

  return (
    <div>
    <div className="department-pass-percentage">
      <h1 className="charttitle">DAYWISE USERS USAGE</h1>
      <div className="chart-container">
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Days" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Usage" fill="#858da1" />
        </BarChart>
      </div>
    </div></div>
  );
};

export default Dashboard;