// import React, { useState } from 'react';
// import './Contactform.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (formData.name.trim().length < 3) {
//       newErrors.name = 'Name must be at least 3 characters';
//     }

//     if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone must be a 10-digit number';
//     }

//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     if (formData.message.trim().length < 10) {
//       newErrors.message = 'Message must be at least 10 characters';
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const validationErrors = validate();

//   //   if (Object.keys(validationErrors).length > 0) {
//   //     setErrors(validationErrors);
//   //   } else {
//   //     alert('Message Sent!');
//   //     setFormData({ name: '', phone: '', email: '', message: '' });
//   //     setErrors({});
//   //   }
//   // };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const validationErrors = validate();

//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//   } else {
//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Message Sent Successfully!');
//         setFormData({ name: '', phone: '', email: '', message: '' });
//       } else {
//         alert('Failed: ' + data.msg);
//       }
//     } catch (err) {
//       alert('Error: ' + err.message);
//     }
//   }
// };


//   return (
//     <div className="contact-form-section">
//       <div className="contact-form-overlay">
//         <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
//           <h2>Contact Us</h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {errors.name && <p className="error-msg">{errors.name}</p>}

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           {errors.phone && <p className="error-msg">{errors.phone}</p>}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p className="error-msg">{errors.email}</p>}

//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           {errors.message && <p className="error-msg">{errors.message}</p>}

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';
import './Contactform.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 3) newErrors.name = 'Name must be at least 3 characters';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be a 10-digit number';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Message Sent Successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setErrors({});
      } else {
        alert('Failed: ' + data.msg);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form-overlay">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <h2>Contact Us</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error-msg">{errors.phone}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error-msg">{errors.message}</p>}

          <button type="submit" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
