import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './dashboardsidebar.css';
import { FaHome, FaUsers, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { GrServices, GrGallery } from 'react-icons/gr';
import { IoIosListBox } from 'react-icons/io';

const menuItems = [
  { icon: <FaHome />, label: 'Home', path: '/dashboardlayout/home' },
  { icon: <GrServices />, label: 'Services', path: '/dashboardlayout/category' },
  { icon: <GrGallery />, label: 'Gallery', path: '/dashboardlayout/gallery' },
  { icon: <FaUsers />, label: 'Users', path: '/dashboardlayout/users' },
  { icon: <IoIosListBox />, label: 'List', path: '/dashboardlayout/list' },
  { icon: <FaChartBar />, label: 'Reports', path: '/dashboardlayout/report' },
  { icon: <FaSignOutAlt />, label: 'Logout', path: '/dashboardlayout/logout' },
];

function DashboardSidebar() {
  const location = useLocation();

  return (
    <aside className="dashboard-sidebar">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`sidebar-icon-wrapper ${
            location.pathname === item.path ? 'active' : ''
          }`}
        >
          <div className="sidebar-icon">{item.icon}</div>
          <span className="tooltip-text">{item.label}</span>
        </Link>
      ))}
    </aside>
  );
}

export default DashboardSidebar;
