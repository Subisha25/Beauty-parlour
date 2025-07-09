import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './dashboardsidebar';
import './dashboardsidebar.css'; // or your layout CSS

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
