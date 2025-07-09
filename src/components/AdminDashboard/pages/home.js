import React from 'react';
import './home.css';
import { MdDesignServices } from "react-icons/md";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Admin Dashboard</h2>

    <div className="summary-cards">
  <div className="card1">
    <div className="card-top">
      <div className="card-icon orange-icon">
        <i className="fas fa-folder-open"></i>
      </div>
      <div className="card-text">
        <span>Total Clients</span>
        <h3>30</h3>
      </div>
    </div>
    <div className="card-footer">
      <i className="fas fa-exclamation-circle"></i> Get More Space...
    </div>
  </div>

  <div className="card">
    <div className="card-top">
      <div className="card-icon green-icon">
        <i className="fas fa-calendar-check"></i>
      </div>
      <div className="card-text">
        <span>Total Appointments</span>
        <h3>23</h3>
      </div>
    </div>
    <div className="card-footer">
      <i className="fas fa-clock"></i> Last 24 Hours
    </div>
  </div>

  <div className="card">
    <div className="card-top">
      <div className="card-icon red-icon">
  <MdDesignServices />      </div>
      <div className="card-text">
        <span>Total Services</span>
        <h3>52</h3>
      </div>
    </div>
    <div className="card-footer">
      <i className="fas fa-code-branch"></i> Tracked from System
    </div>
  </div>

  <div className="card">
    <div className="card-top">
      <div className="card-icon blue-icon">
        <i className="fab fa-instagram"></i>
      </div>
      <div className="card-text">
        <span>Followers</span>
        <h3>+245</h3>
      </div>
    </div>
    <div className="card-footer">
      <i className="fas fa-sync-alt"></i> Just Updated
    </div>
  </div>
</div>



      <div className="chart-cards">
        <div className="chart-card green">
          <h4>Daily Sales</h4>
          <p>+15% increase in today’s sales.</p>
          <span className="timestamp">updated 4 mins ago</span>
        </div>

        <div className="chart-card orange">
          <h4>Email Subscriptions</h4>
          <p>Last Campaign Performance</p>
          <span className="timestamp">campaign sent 2 days ago</span>
        </div>

        <div className="chart-card red">
          <h4>Completed Tasks</h4>
          <p>Last Campaign Performance</p>
          <span className="timestamp">campaign sent 1 week ago</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
