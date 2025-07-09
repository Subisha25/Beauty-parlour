import React, { useEffect, useState } from 'react';
import './Gallery.css';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/gallery')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="masonry-container">
      <h1 className="gallery-title">Bridal Makeup Gallery</h1>
      <div className="masonry-grid">
        {images.map((img, index) => (
          <div className="masonry-item" key={index}>
    <img src={`http://localhost:5000${img.image_url}`} alt={`Bridal ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
