
// import React, { useState } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import { IoMdClose } from 'react-icons/io';
// import './WhatsappFloatingButton.css';

// const WhatsappFloatingButton = () => {
//   const [showBox, setShowBox] = useState(false);
//   const phoneNumber = '918754768231'; // Replace with your WhatsApp number

//   return (
//     <div className="whatsapp-container">
//       {showBox && (
//         <div className="whatsapp-popup">
//           <p className="popup-message">Book your appointment via WhatsApp!</p>
//           <a
//             href={`https://wa.me/${phoneNumber}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="popup-button"
//           >
//             Book Now
//           </a>
//         </div>
//       )}

//       <div className="whatsapp-toggle-wrapper" onClick={() => setShowBox(!showBox)}>
//         <div className="whatsapp-bubble">
//           <span className="whatsapp-text">
//             Need help? Contact us!
//           </span>
//         </div>
//         <div className={`whatsapp-icon-wrapper ${showBox ? 'rotate' : ''}`}>
//           {showBox ? (
//             <IoMdClose className="close-icon" />
//           ) : (
//             <FaWhatsapp className="whatsapp-icon" />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatsappFloatingButton;

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import './WhatsappFloatingButton.css';
import axios from 'axios';

const WhatsappFloatingButton = () => {
  const [showBox, setShowBox] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  // ✅ Fetch mobile number from backend on mount
  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin-profiles');
        if (response.data && response.data.length > 0) {
          setMobileNumber(response.data[0].mobile); // take first admin's mobile number
        }
      } catch (error) {
        console.error('Error fetching admin profile:', error);
      }
    };

    fetchAdminProfile();
  }, []);

  return (
    <div className="whatsapp-container">
      {showBox && (
        <div className="whatsapp-popup">
          <p className="popup-message">Book your appointment via WhatsApp!</p>
          <a
            href={`https://wa.me/91${mobileNumber}`} // prepend +91 if not included in DB
            target="_blank"
            rel="noopener noreferrer"
            className="popup-button"
          >
            Book Now
          </a>
        </div>
      )}

      <div className="whatsapp-toggle-wrapper" onClick={() => setShowBox(!showBox)}>
        <div className="whatsapp-bubble">
          <span className="whatsapp-text">
            Need help? Contact us!
          </span>
        </div>
        <div className={`whatsapp-icon-wrapper ${showBox ? 'rotate' : ''}`}>
          {showBox ? (
            <IoMdClose className="close-icon" />
          ) : (
            <FaWhatsapp className="whatsapp-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsappFloatingButton;
