import React from 'react';
import './Dashboard.css'; 
import dashboardImage from '../dashboard.png';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
    </div>
  );
}

export default Dashboard;
