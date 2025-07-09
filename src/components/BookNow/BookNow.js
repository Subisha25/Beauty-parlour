import React, { useState } from 'react';
import './BookNow.css';
import { useLocation } from 'react-router-dom';

const BookNow = () => {
  const [errors, setErrors] = useState({});
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    category: location.state?.category || '',
    subcategory: location.state?.subcategory || '',
    title: location.state?.title || '',
    amount: location.state?.amount || '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const timeFormatRegex = /^\d{1,2}:\d{2}\s?(AM|PM)\s+to\s+\d{1,2}:\d{2}\s?(AM|PM)$/i;

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = 'This field is required';
    });

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (formData.mobile && !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (formData.time && !timeFormatRegex.test(formData.time)) {
      newErrors.time = 'Enter time in format: 10:30 AM to 11:30 AM';
    }

    return newErrors;
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       alert('BookNow Submitted Successfully!');
//       console.log(formData);
//       setFormData({
//         name: '',
//         mobile: '',
//         email: '',
//         address: '',
//         category: location.state?.category || '',
//         subcategory: location.state?.subcategory || '',
//         title: location.state?.title || '',
//         amount: location.state?.amount || '',
//         date: '',
//         time: '',
//       });
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };


const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await fetch('http://localhost:5000/api/booking/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Booking submitted! Await admin approval via email.');
        console.log(result);

        // Reset form after success
        setFormData({
          name: '',
          mobile: '',
          email: '',
          address: '',
          category: location.state?.category || '',
          subcategory: location.state?.subcategory || '',
          title: location.state?.title || '',
          amount: location.state?.amount || '',
          date: '',
          time: '',
        });

        setErrors({});
      } else {
        alert('❌ Failed to submit. Please try again.');
        console.error(result);
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      alert('Server error. Please try later.');
    }
  } else {
    setErrors(validationErrors);
  }
};
    

const fields = [
    { name: 'name', placeholder: 'Name' },
    { name: 'mobile', placeholder: 'Mobile No' },
    { name: 'email', placeholder: 'Email' },
    { name: 'address', placeholder: 'Address' },
    { name: 'category', placeholder: 'Category Name' },
    { name: 'subcategory', placeholder: 'Subcategory Name' },
    { name: 'title', placeholder: 'Service Title' },
    { name: 'amount', placeholder: 'Amount' },
    { name: 'date', placeholder: 'Date', type: 'date' },
    { name: 'time', placeholder: 'Timing' },
  ];

  return (
    <div className='booknow-body'>
      <div className="booknow-form-container">
        <h2 className="booknow-heading">Book Your Appointment</h2>
        <form onSubmit={handleSubmit} className="booknow-form">
          <div className="booknow-grid">
            {fields.map((field) => (
              <div className="booknow-input-group" key={field.name}>
              <input
  type={field.type || 'text'}
  name={field.name}
  placeholder={field.placeholder}
  value={formData[field.name]}
  onChange={handleChange}
  className={`booknow-input ${formData[field.name] ? 'filled' : 'empty'} ${
    ['category', 'subcategory', 'title', 'amount'].includes(field.name) ? 'autofill-style' : ''
  }`}
  readOnly={['category', 'subcategory', 'title', 'amount'].includes(field.name)}
/>

                {errors[field.name] && (
                  <p className="booknow-error">{errors[field.name]}</p>
                )}
              </div>
            ))}
          </div>
          <button type="submit" className="booknow-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
