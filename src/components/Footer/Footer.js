// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer-section">
//       <div className="footer-overlay">
//         <div className="footer-content">
//           <div className="footer-column">
//             <h2 className="footer-logo">Glow Beauty</h2>
//             <p>Enhancing your natural beauty with care and expertise.</p>
//           </div>
//           <div className="footer-column">
//             <h3>Quick Links</h3>
//             <ul>
//               <li><Link to="#">Home</Link></li>
//               <li><Link to="#">Services</Link></li>
//               <li><Link to="#">About Us</Link></li>
//               <li><Link to="#">Contact</Link></li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Contact</h3>
//             <p>123 Beauty Street, Chennai</p>
//             <p>+91 98765 43210</p>
//             <p>glowbeauty@example.com</p>
//             <div className="social-icons">
//               <Link to="#"><i className="fab fa-facebook-f"></i></Link>
//               <Link to="#"><i className="fab fa-instagram"></i></Link>
//               <Link to="#"><i className="fab fa-twitter"></i></Link>
//             </div>
//           </div>
//         </div>
//         <p className="footer-bottom">&copy; 2025 Glow Beauty. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';


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
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p><FaMapMarkerAlt className="footer-icon" /> 123 Beauty Street, Chennai</p>
            <p><FaPhoneAlt className="footer-icon" /> +91 98765 43210</p>
            <p><FaEnvelope className="footer-icon" /> glowbeauty@example.com</p>

            <div className="social-icons">
              <Link to="/"><FaFacebookF /></Link>
              <Link to="/"><FaInstagram /></Link>
              <Link to="/"><FaTwitter /></Link>
            </div>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2025 Glow Beauty. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
