import React from 'react';
import './Banner.css';

const bannerImages = [
  "https://i.pinimg.com/736x/3f/12/f5/3f12f585444d763cc58802e5f7a07fc1.jpg",
  "https://t4.ftcdn.net/jpg/07/80/97/79/360_F_780977959_6ZvXzzNiplbG6YSkcQAInJCxKD4LZ0JI.jpg",
  "https://i.pinimg.com/736x/72/d3/fb/72d3fb3a120989c85478884e74a94fe7.jpg",
  "https://cdn.wallpapersafari.com/66/13/xbkgOi.jpg",
  "https://rukminim2.flixcart.com/image/850/1000/xif0q/lipstick/9/t/r/8-10-products-in-collection-red-matte-lipstick-liquid-lipstick-2-original-imahyq8jwvrphsdp.jpeg?q=90&crop=false",
  "https://t4.ftcdn.net/jpg/14/01/34/39/360_F_1401343943_jU9B7UmgwhukEP2WPaTOb52GdvkzTmlo.jpg"
];

const Banner = () => {
  return (
    <div className="banner">
      {bannerImages.map((image, index) => (
        <div
          className="banner-slide"
          key={index}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
   <div className="banner-content">
  <h1>Glow with Confidence</h1>
  <p>From threading to facials, experience personalized care that brings out your inner beauty.</p>
  <button className="banner-buttons">Book Your Appointment</button>
</div>

<a href="#next-section" className="scroll-down">↓</a>

    </div>
  );
};

export default Banner;
