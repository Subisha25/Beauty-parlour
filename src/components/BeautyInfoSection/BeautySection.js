import React from 'react';
import '../BeautyInfoSection/BeautySection.css';

function BeautySection() {
  return (
    <>
      {/* Banner Section */}
      <div className="banner-section">
        <div className="servicebanner-content">
          <h1>Enhance Your Natural Beauty</h1>
          <p>Relax, rejuvenate, and glow at our expert beauty parlour.</p>
          {/* <button className="appointment-btn">Book Appointment</button> */}
          <button className="glass-button">
      <span className="btn-text">Book Appoinment</span>
      <span className="btn-icon">↗</span>
    </button>
        </div>
      </div>

     
    </>
  );
}

export default BeautySection;
