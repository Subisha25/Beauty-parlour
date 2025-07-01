// import React from 'react';
// import './OurServices.css';

// const services = [
//   {
//     title: 'Nail Art',
//     description: 'Beautiful nail art designs with trendy styles.',
//     img: 'https://i.pinimg.com/736x/c9/5b/25/c95b258a950b9490671fba26934a023b.jpg',
//   },
//   {
//     title: 'Stitching',
//     description: 'Perfect blouse and dress stitching services.',
//     img: 'https://i.pinimg.com/736x/d0/a1/e4/d0a1e46cea48d6cf67f06f00f93fd5a9.jpg',
//   },
//   {
//     title: 'Facial',
//     description: 'Relaxing facials to glow your skin naturally.',
//     img: 'https://i.pinimg.com/736x/0b/dc/1b/0bdc1b13923be2b4686488a874f7b353.jpg',
//   },
//   {
//     title: 'Makeup',
//     description: 'HD, Bridal and Party makeup packages.',
//     img: 'https://i.pinimg.com/736x/a6/4b/35/a64b35cf9670fcc0f27795ab6f1d5ee4.jpg',
//   },
//   {
//     title: 'Waxing',
//     description: 'Painless waxing services for smooth skin.',
//     img: 'https://i.pinimg.com/736x/84/e3/14/84e314899976b7f19db7fc94caf1466d.jpg',
//   },
//   {
//     title: 'Hair Care',
//     description: 'Professional haircuts and treatments.',
//     img: 'https://i.pinimg.com/736x/fe/6a/29/fe6a298d1e3415bb89bc14971986ccc4.jpg',
//   },
//   {
//     title: 'Threading',
//     description: 'Sharp and neat eyebrow threading.',
//     img: 'https://i.pinimg.com/736x/4a/48/d2/4a48d247b442449c2bb7326f11ff93c4.jpg',
//   },
//    {
//     title: 'Hair Style',
//     description: 'Sharp and neat eyebrow threading.',
//     img: 'https://i.pinimg.com/736x/ad/79/ab/ad79ab4e8eff6fc576249390449cf5bc.jpg',
//   },

// ];

// const OurServices = () => {
//   return (
//     <div className="services-section">
//       <h2 className="services-title">Our Services</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="service-card"
//             style={{ backgroundImage: `url(${service.img})` }}
//           >
//             <div className="service-overlay">
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurServices;


import React from 'react';
import './OurServices.css';

const services = [
  {
    title: 'Nail Art',
    description: 'Beautiful nail art designs with trendy styles.',
    img: 'https://i.pinimg.com/736x/c9/5b/25/c95b258a950b9490671fba26934a023b.jpg',
  },
  {
    title: 'Stitching',
    description: 'Perfect blouse and dress stitching services.',
    img: 'https://i.pinimg.com/736x/d0/a1/e4/d0a1e46cea48d6cf67f06f00f93fd5a9.jpg',
  },
  {
    title: 'Facial',
    description: 'Relaxing facials to glow your skin naturally.',
    img: 'https://i.pinimg.com/736x/0b/dc/1b/0bdc1b13923be2b4686488a874f7b353.jpg',
  },
  {
    title: 'Makeup',
    description: 'HD, Bridal and Party makeup packages.',
    img: 'https://i.pinimg.com/736x/a6/4b/35/a64b35cf9670fcc0f27795ab6f1d5ee4.jpg',
  },
  {
    title: 'Waxing',
    description: 'Painless waxing services for smooth skin.',
    img: 'https://i.pinimg.com/736x/84/e3/14/84e314899976b7f19db7fc94caf1466d.jpg',
  },
  {
    title: 'Hair Care',
    description: 'Professional haircuts and treatments.',
    img: 'https://i.pinimg.com/736x/fe/6a/29/fe6a298d1e3415bb89bc14971986ccc4.jpg',
  },
  {
    title: 'Threading',
    description: 'Sharp and neat eyebrow threading.',
    img: 'https://i.pinimg.com/736x/4a/48/d2/4a48d247b442449c2bb7326f11ff93c4.jpg',
  },
  {
    title: 'Hair Style',
    description: 'Trendy hairstyles for every occasion.',
    img: 'https://i.pinimg.com/736x/ad/79/ab/ad79ab4e8eff6fc576249390449cf5bc.jpg',
  },
];

const OurServices = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url(${service.img})` }}
          >
            <div className="service-info">
              <h3>{service.title}</h3>
              {/* <p>{service.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
