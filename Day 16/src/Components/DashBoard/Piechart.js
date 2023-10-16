import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import './Table.css'// Import the CSS file

const data = [
  { name: 'D1', value: 30 },
  { name: 'D2', value: 40 },
  { name: 'D3', value: 60 },
  { name: 'D5', value: 70 },
  { name: 'D6', value: 50 }, // Adding the "O" grade
];

const COLORS = ['#858da1', 'rgba(60, 97, 153, 0.947)', 'rgba(86, 123, 38, 0.673)', ' rgba(123, 85, 38, 0.673)', 'rgba(123, 38, 80, 0.673)']; // Define colors for each grade, including "O"

const Piechart = () => {
  return (
   
    <div className="student-grades-pie-chart">
      <h2 className="chart-title">USERS LOGIN PERCENTAGE</h2>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`Cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Piechart;