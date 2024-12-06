import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-content">Welcome to the dashboard! Here are some random data to represent the content. </p>
      <Link to="/profile" className="dashboard-link">Return to Profile Page</Link>
    </div>
  );
}

export default Dashboard;
