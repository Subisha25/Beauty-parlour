// // import React from 'react';
// // import './Banner.css';
// // import AboutUs from '../BeautyInfoSection/AboutUs';
// // import BeautySection from '../BeautyInfoSection/BeautySection';
// // import OurServices from '../OurServices/OurServices';
// // import { useNavigate } from 'react-router-dom';
// // import WhatsappFloatingButton from './WhatsappFloatingButton'; // Adjust path if needed


// // const bannerImages = [
// //   "https://i.pinimg.com/736x/3f/12/f5/3f12f585444d763cc58802e5f7a07fc1.jpg",
// //   "https://t4.ftcdn.net/jpg/07/80/97/79/360_F_780977959_6ZvXzzNiplbG6YSkcQAInJCxKD4LZ0JI.jpg",
// //   "https://i.pinimg.com/736x/72/d3/fb/72d3fb3a120989c85478884e74a94fe7.jpg",
// //   "https://cdn.wallpapersafari.com/66/13/xbkgOi.jpg",
// //   "https://rukminim2.flixcart.com/image/850/1000/xif0q/lipstick/9/t/r/8-10-products-in-collection-red-matte-lipstick-liquid-lipstick-2-original-imahyq8jwvrphsdp.jpeg?q=90&crop=false",
// //   "https://t4.ftcdn.net/jpg/14/01/34/39/360_F_1401343943_jU9B7UmgwhukEP2WPaTOb52GdvkzTmlo.jpg"
// // ];
// // const Banner = () => {


// // const navigate = useNavigate(); 


// //   return (
// //     <>
// //     <div className="banner">
// //       {bannerImages.map((image, index) => (
// //         <div
// //           className="banner-slide"
// //           key={index}
// //           style={{ backgroundImage: `url(${image})` }}
// //         ></div>
// //       ))}
// //    <div className="banner-content">
// //   <h1>Glow with Confidence</h1>
// //   <p>From threading to facials, experience personalized care that brings out your inner beauty.</p>
// //   <button className="banner-buttons" onClick={() => {
// //     navigate('/service');
// //   }}>Book Your Appointment</button>
// // </div>

// // <a href="#next-section" className="scroll-down">↓</a>

// //     </div>
// //     <AboutUs />
// //     <BeautySection />
// //     <OurServices />
// //      {/* <WhatsappFloatingButton /> */}
// //     </>
// //   );
// // };

// // export default Banner;


// import React, { useEffect, useState } from 'react';
// import './Banner.css';
// import AboutUs from '../BeautyInfoSection/AboutUs';
// import BeautySection from '../BeautyInfoSection/BeautySection';
// import OurServices from '../OurServices/OurServices';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Banner = () => {
//   const [banners, setBanners] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   const fetchBanners = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/banner');
//       setBanners(res.data); // assuming API returns array of { title, subtitle, image }
//     } catch (error) {
//       console.error("Failed to fetch banners:", error);
//     }
//   };

//   return (
//     <>
//       <div className="banner">
//         {banners.map((banner, index) => (
//           <div
//             className="banner-slide"
//             key={index}
//             style={{ backgroundImage: `url(http://localhost:5000${banner.image})` }}
//           ></div>
//         ))}

//         {banners.length > 0 && (
//           <div className="banner-content">
//             <h1>{banners[0].title}</h1>
//             <p>{banners[0].subtitle}</p>
//             <button className="banner-buttons" onClick={() => navigate('/service')}>
//               Book Your Appointment
//             </button>
//           </div>
//         )}

//         <a href="#next-section" className="scroll-down">↓</a>
//       </div>

//       <AboutUs />
//       <BeautySection />
//       <OurServices />
//     </>
//   );
// };

// export default Banner;


import React, { useEffect, useState } from 'react';
import './Banner.css';
import AboutUs from '../BeautyInfoSection/AboutUs';
import BeautySection from '../BeautyInfoSection/BeautySection';
import OurServices from '../OurServices/OurServices';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [banners]);

  const fetchBanners = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/banner');
      setBanners(res.data);
    } catch (error) {
      console.error("Failed to fetch banners:", error);
    }
  };

  return (
    <>
      <div className="banner">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`banner-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(http://localhost:5000${banner.image})` }}
          >

             <div className="banner-content">
            <h1>{banners[currentIndex].title}</h1>
            <p>{banners[currentIndex].subtitle}</p>
            <button className="banner-buttons" onClick={() => navigate('/service')}>
              Book Your Appointment
            </button>
          </div>
          </div>
        ))}

      

        <a href="#next-section" className="scroll-down">↓</a>
      </div>

      <AboutUs />
      <BeautySection />
      <OurServices />
    </>
  );
};

export default Banner;
