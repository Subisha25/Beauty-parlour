// import React from 'react';
// import './Gallery.css';

// const images = [
//   'https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg',
//   'https://i.pinimg.com/736x/db/cc/e9/dbcce9ddfed8ce27f9df708bb7b2a7f6.jpg',
//   'https://i.pinimg.com/736x/dc/90/63/dc90637bf7317d926ef583143bd2a1a1.jpg',
//   'https://i.pinimg.com/736x/ec/76/af/ec76af6237004d76479a656dc587323c.jpg',
//   'https://i.pinimg.com/736x/7c/21/a1/7c21a15e61f25598e6722a7b45f0a08f.jpg',
//   'https://i.pinimg.com/736x/fc/18/41/fc184189238bed1ee9a542e5642eec21.jpg',
// ];

// function Gallery() {
//   return (
//     <div className="gallery-container">
//       <h1 className="gallery-title">Our Gallery</h1>
//       <div className="gallery-grid">
//         {images.map((src, index) => (
//           <div className="gallery-card" key={index}>
//             <img src={src} alt={`Gallery ${index}`} />
//             <div className="glass-overlay" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;

import React from 'react';
import './Gallery.css';

const images = [
  'https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg',
  'https://i.pinimg.com/736x/db/cc/e9/dbcce9ddfed8ce27f9df708bb7b2a7f6.jpg',
  'https://i.pinimg.com/736x/dc/90/63/dc90637bf7317d926ef583143bd2a1a1.jpg',
  'https://i.pinimg.com/736x/ec/76/af/ec76af6237004d76479a656dc587323c.jpg',
  'https://i.pinimg.com/736x/7c/21/a1/7c21a15e61f25598e6722a7b45f0a08f.jpg',
  "https://i.pinimg.com/736x/27/5e/82/275e82b3f67d72c8c87850622f9efcba.jpg",

  'https://i.pinimg.com/736x/fc/18/41/fc184189238bed1ee9a542e5642eec21.jpg',
'https://i.pinimg.com/736x/19/8c/50/198c50d4a4b012a60a80f89a80d4dc03.jpg',
  'https://i.pinimg.com/736x/7c/4c/b4/7c4cb4cd2d32eae57b0f08ae6674c3f4.jpg',
"https://i.pinimg.com/736x/f2/70/e5/f270e5170de7cdc103c9318b4d8ea080.jpg",
"https://i.pinimg.com/736x/4c/ea/99/4cea99c306573ffc832bce4283ef5739.jpg",
"https://i.pinimg.com/736x/09/7e/24/097e2433dfde85ef744e6f0085e89068.jpg",
"https://i.pinimg.com/736x/30/f0/e4/30f0e4bc66634e924d7a5783cfa10c11.jpg",
  "https://i.pinimg.com/736x/09/a9/77/09a97733728921a0ca0f4560045f879e.jpg",
  "https://i.pinimg.com/736x/54/e1/00/54e10066af867a268db6b406b42d3344.jpg",
  "https://i.pinimg.com/736x/c3/c9/8a/c3c98ad69537bcd4af25e3018d29e4d6.jpg"
  // Add more image URLs here
];

function Gallery() {
  return (
    <div className="masonry-container">
      <h1 className="gallery-title">Bridal Makeup Gallery</h1>
      <div className="masonry-grid">
        {images.map((src, index) => (
          <div className="masonry-item" key={index}>
            <img src={src} alt={`Bridal ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
