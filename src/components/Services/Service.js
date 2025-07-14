import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Service.css';
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Service = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryName, setSelectedSubcategoryName] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/makeup-services')
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then((res) => {
        setCategories(res.data);
        if (res.data.length > 0) {
          setSelectedCategoryId(res.data[0].id);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      axios.get(`http://localhost:5000/api/subcategories/${selectedCategoryId}`)
        .then((res) => {
          setSubcategories(res.data);
          setSelectedSubcategoryName(null); // Reset subcategory selection when category changes
        })
        .catch((err) => console.error(err));
    }
  }, [selectedCategoryId]);

  return (
    <div className="makeup-page">
   {/* ✅ Mobile layout */}
{/* ✅ Mobile layout */}
<div className="mobile-category-wrapper">
  {/* -- Categories -- */}
  <div className="mobile-main-categories">
    {categories.map((cat) => (
      <div
        key={cat.id}
        className={`main-cat-btn ${selectedCategoryId === cat.id ? 'active' : ''}`}
        onClick={() => {
          setSelectedCategoryId(cat.id);
          setSelectedSubcategoryName(null); // Reset subcategory when category changes
        }}
      >
        <img
          src={`http://localhost:5000/uploads/${cat.image}`}
          alt={cat.name}
          className="icon"
        />
        <span>{cat.name}</span>
      </div>
    ))}
  </div>

  {/* -- Subcategories (based on selected category) -- */}
  <div className="mobile-sub-categories">
    {subcategories.map((sub) => (
      <div
        key={sub.id}
        className={`sub-cat-btn ${selectedSubcategoryName === sub.name ? 'active' : ''}`}
        onClick={() => setSelectedSubcategoryName(sub.name)}
      >
        {sub.name}
      </div>
    ))}
  </div>
</div>



      <aside className="sidebar">
        <ul className="category-list">
          {categories.map((category) => (
            <div className="category-group" key={category.id}>
              <li
                className={`category-item ${selectedCategoryId === category.id ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedCategoryId(category.id);
                }}
              >
                <span className="icon">
                  <img src={`http://localhost:5000/uploads/${category.image}`} alt={category.name} className="icon" />
                </span>
                <span>{category.name}</span>
              </li>

              {selectedCategoryId === category.id &&
                subcategories.map((sub, index) => (
                  <li
                    key={sub.id}
                    className={`subcategory-item ${selectedSubcategoryName === sub.name ? 'selected' : ''}`}
                    onClick={() => setSelectedSubcategoryName(sub.name)}
                  >
                    <span className="icon">{index % 2 === 0 ? '✨' : '👰'}</span>
                    <span>{sub.name}</span>
                  </li>
                ))}
            </div>
          ))}
        </ul>
      </aside>

      <main className="service-cards">
          {services
            .filter((s) => {
              const categoryMatch = s.categoryName === categories.find(c => c.id === selectedCategoryId)?.name;
              const subcategoryMatch = selectedSubcategoryName ? s.subcategoryName === selectedSubcategoryName : true;
              return categoryMatch && subcategoryMatch;
            })
          .map((service, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img
                  src={`http://localhost:5000/uploads/${service.image}`}
                  alt={service.title}
                />
                <div className="duration-badge">🕐 {service.duration}</div>
                <div className="discount-badge">{service.discount}% Off</div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <div className="price-row">
                  <span className="price">₹{service.price}</span>
                  <span className="original">₹{service.oldPrice}</span>
                  <span className="discount-text">{service.discount}% Off</span>
                </div>
<div className="button-row">
  <button
    className="book-btn"
    onClick={() =>
      navigate('/booknow', {
        state: {
          category: service.categoryName,
          subcategory: service.subcategoryName,
          title: service.title,
          amount: service.price,
        },
      })
    }
  >
    Book Now
  </button>
  <button className="view-btn" onClick={() => setSelectedService(service)}>
    <IoEyeSharp className='eyeicon' /> VIEW DETAILS
  </button>
</div>

              </div>
            </div>
          ))}
      </main>

      {selectedService && (
        <div className="modal-overlay
        " onClick={() => setSelectedService(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
           <div className="modal-content">
  {/* Close Icon */}
  <button className="close-btn" onClick={() => setSelectedService(null)}>✖</button>

  {/* Image */}
  <img
    src={`http://localhost:5000/uploads/${selectedService.image}`}
    alt={selectedService.title}
    className="modal-image"
  />

  {/* Title */}
  <h3 className="modal-title">{selectedService.title}</h3>

  {/* Price Section */}
  <div className="modal-price-row">
    <span className="modal-price">₹{selectedService.price}</span>
    <span className="modal-original">₹{selectedService.oldPrice}</span>
    <span className="modal-discount">{selectedService.discount}% Off</span>
  </div>

  {/* Advantages List */}
  <ul className="modal-advantages">
    {(Array.isArray(selectedService.advantages)
      ? selectedService.advantages
      : (() => {
          try {
            return JSON.parse(selectedService.advantages);
          } catch (e) {
            return selectedService.advantages
              .replace(/\[|\]|"|'/g, '')
              .split(/\r?\n|,/)
              .map((a) => a.trim())
              .filter(Boolean);
          }
        })()
    ).map((adv, idx) => (
      <li key={idx}>      <span className="tick-icon">✔</span> {adv}
{adv}</li>
    ))}
  </ul>

  <button
  className="book-btn modal-book"
  onClick={() =>
    navigate('/booknow', {
      state: {
        category: selectedService.categoryName,
        subcategory: selectedService.subcategoryName,
        title: selectedService.title,
        amount: selectedService.price,
      },
    })
  }
>
  Book Now
</button>

</div>

          </div>
        </div>
      )}
    </div>
  );
};


export default Service;
