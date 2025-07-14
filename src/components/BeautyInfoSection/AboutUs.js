// // import React from 'react';
// // import '../BeautyInfoSection/AboutUs.css';

// // function AboutUs() {
// //   return (
// //     <div className="beauty-container">
// //       {/* LEFT SIDE CONTENT */}
// //       <div className="beauty-left">
// //         <h2>Enhance Your Beauty with Our Professional Touch</h2>
// //         <p>
//           // Our beauty parlour offers a luxurious range of services from bridal makeup and facials to threading, waxing, and hair styling — all in one relaxing space.
// //         </p>
// //         <p>
// //           With experienced beauticians, premium products, and personalized care, we promise a rejuvenating experience that highlights your natural elegance.
// //         </p>
// //       <div className="stats">
// //   <div className="stat-card">
// //     <span className="stat-number">12+</span>
// //     <span className="stat-label">Years<br />of Service</span>
// //   </div>
// //   <div className="stat-card">
// //     <span className="stat-number">500+</span>
// //     <span className="stat-label">Happy<br />Clients</span>
// //   </div>
// // </div>

// //       </div>

// //       {/* RIGHT SIDE IMAGES */}
// //       <div className="beauty-right">
// //         <img
// //           src="https://i.pinimg.com/736x/dc/5f/ed/dc5fed22a6e7270cfd12699f01341562.jpg"
// //           alt="Bridal makeup"
// //           className="beauty-image"
// //         />
// //         <img
// //           src="https://i.pinimg.com/736x/c2/3f/ff/c23fffe7c42083baa43e2f5681f488e1.jpg"
// //           alt="Glamorous look"
// //           className="beauty-image"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default AboutUs;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../BeautyInfoSection/AboutUs.css';

// function AboutUs() {
//   const [aboutData, setAboutData] = useState(null);

//   useEffect(() => {
//     const fetchAboutUs = async () => {
//       try {
//         const res = await axios.get('/api/aboutus');
//         setAboutData(res.data);
//       } catch (err) {
//         console.error('Error fetching About Us data:', err);
//       }
//     };

//     fetchAboutUs();
//   }, []);

//   if (!aboutData) return <div>Loading...</div>;

//   return (
//     <div className="beauty-container">
//       {/* LEFT SIDE CONTENT */}
//       <div className="beauty-left">
//         <h2>{aboutData.title}</h2>
//         <p>{aboutData.subtitle}</p>

//         <div className="stats">
//           <div className="stat-card">
//             <span className="stat-number">12+</span>
//             <span className="stat-label">Years<br />of Service</span>
//           </div>
//           <div className="stat-card">
//             <span className="stat-number">500+</span>
//             <span className="stat-label">Happy<br />Clients</span>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE IMAGES */}
//       <div className="beauty-right">
//        <img src={`http://localhost:5000${aboutData.image1}`} alt="About Us Image 1" className="beauty-image" />
// <img src={`http://localhost:5000${aboutData.image2}`} alt="About Us Image 2" className="beauty-image" />

//       </div>
//     </div>
//   );
// }

// export default AboutUs;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../BeautyInfoSection/AboutUs.css';

function AboutUs() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/aboutus');
        if (res.data && res.data.length > 0) {
          setAboutData(res.data[0]); // Only taking the first entry
        }
      } catch (err) {
        console.error('Error fetching About Us data:', err);
      }
    };

    fetchAboutUs();
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div className="beauty-container">
      {/* LEFT SIDE CONTENT */}
      <div className="beauty-left">
        <h2>{aboutData.title}</h2>
        <p>{aboutData.subtitle}</p>

        <div className="stats">
          <div className="stat-card">
            <span className="stat-number">{aboutData.experience}+</span>
            <span className="stat-label">Years<br />of Service</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{aboutData.happyClient}+</span>
            <span className="stat-label">Happy<br />Clients</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="beauty-right">
        <img
          src={`http://localhost:5000${aboutData.image1}`}
          alt="About Us Image 1"
          className="beauty-image"
        />
        <img
          src={`http://localhost:5000${aboutData.image2}`}
          alt="About Us Image 2"
          className="beauty-image"
        />
      </div>
    </div>
  );
}

export default AboutUs;
