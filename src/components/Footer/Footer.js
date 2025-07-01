import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-column">
            <h2 className="footer-logo">Glow Beauty</h2>
            <p>Enhancing your natural beauty with care and expertise.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>123 Beauty Street, Chennai</p>
            <p>+91 98765 43210</p>
            <p>glowbeauty@example.com</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2025 Glow Beauty. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
