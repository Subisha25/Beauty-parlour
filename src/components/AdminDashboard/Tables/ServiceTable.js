
// // ServiceTable.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ServiceTable.css';
// import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

// // Import react-toastify components
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS!

// const ServiceTable = () => {
//   const [services, setServices] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [subcategories, setSubcategories] = useState([]);

//   const [form, setForm] = useState({
//     title: '',
//     duration: '',
//     discount: '',
//     price: '',
//     oldPrice: '',
//     categoryId: '',
//     subcategoryId: '',
//     advantages: '',
//     image: null,
//     imagePreview: null, // For displaying selected image before upload/edit
//   });

//   const [editingId, setEditingId] = useState(null);
//   const [showForm, setShowForm] = useState(false); // State to control form visibility

//   const filteredSubcategories = subcategories.filter(
//   (sub) => String(sub.categoryId) === String(form.categoryId)
// );

//   const BASE = 'http://localhost:5000/api';
//   const IMAGE_BASE_URL = 'http://localhost:5000/uploads/';

//   const fetchServices = async () => {
//     try {
//       const res = await axios.get(`${BASE}/makeup-services`);
//       setServices(res.data);
//     } catch (error) {
//       console.error("Error fetching services:", error);
//       toast.error("Failed to fetch services."); // Error toast
//     }
//   };

//   const fetchDropdowns = async () => {
//     try {
//       const [catRes, subRes] = await Promise.all([
//         axios.get(`${BASE}/categories`),
//         axios.get(`${BASE}/subcategories`),
//       ]);
//       setCategories(catRes.data);
//       setSubcategories(subRes.data);
//     } catch (error) {
//       console.error("Error fetching dropdowns:", error);
//       toast.error("Failed to load categories or subcategories."); // Error toast
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//     fetchDropdowns();
//   }, []);

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     if (name === 'image') {
// //       setForm((prev) => ({
// //         ...prev,
// //         image: files[0],
// //         imagePreview: files[0] ? URL.createObjectURL(files[0]) : null, // Create preview URL
// //       }));
// //     } else {
// //       setForm((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };


// const handleChange = (e) => {
//   const { name, value, files } = e.target;

//   if (name === 'image') {
//     setForm((prev) => ({
//       ...prev,
//       image: files[0],
//       imagePreview: files[0] ? URL.createObjectURL(files[0]) : null,
//     }));
//   } else if (name === 'categoryId') {
//     setForm((prev) => ({
//       ...prev,
//       categoryId: value,
//       subcategoryId: '', // Reset subcategory when category changes
//     }));
//   } else {
//     setForm((prev) => ({ ...prev, [name]: value }));
//   }
// };

//   const resetForm = () => {
//     setForm({
//       title: '',
//       duration: '',
//       discount: '',
//       price: '',
//       oldPrice: '',
//       categoryId: '',
//       subcategoryId: '',
//       advantages: '',
//       image: null,
//       imagePreview: null,
//     });
//     setEditingId(null);
//     setShowForm(false); // Close the form
//   };

//   const handleSubmit = async () => {
//     // Basic validation
//     // if (!form.title.trim() || !form.duration.trim() || !form.price.trim() || !form.categoryId || !form.subcategoryId) {
//     //   toast.warn("Please fill in all required fields (Title, Duration, Price, Category, Subcategory).");
//     //   return;
//     // }

//     if (
//   !form.title.trim() ||
//   !form.duration.trim() ||
//   !form.categoryId ||
//   !form.subcategoryId ||
//   form.price === '' || isNaN(form.price)
// ) {
//   toast.warn("Please fill in all required fields (Title, Duration, Price, Category, Subcategory).");
//   return;
// }

//     if (!editingId && !form.image) {
//       toast.warn("Please select an image for the new service.");
//       return;
//     }

//     const formData = new FormData();
//     Object.entries(form).forEach(([key, value]) => {
//       if (key === 'advantages') {
//         // Ensure advantages is always an array of strings, even if empty or single
//         const advantagesArray = value.split(',').map(item => item.trim()).filter(Boolean);
//         formData.append(key, JSON.stringify(advantagesArray));
//       } else if (key === 'image' && value) {
//         formData.append(key, value);
//       } else if (value !== null && key !== 'imagePreview' && key !== 'image') {
//         formData.append(key, value);
//       }
//     });

//     try {
//       if (editingId) {
//         await axios.put(`${BASE}/makeup-services/${editingId}`, formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });
//         toast.success("Service updated successfully!"); // Success toast for update
//       } else {
//         await axios.post(`${BASE}/makeup-services`, formData, {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         });
//         toast.success("Service added successfully!"); // Success toast for add
//       }
//       resetForm();
//       fetchServices();
//     } catch (error) {
//       console.error('Error submitting form:', error.response?.data || error.message);
//       toast.error("Failed to save service. Please try again."); // Error toast for failed save
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this service?")) {
//       try {
//         await axios.delete(`${BASE}/makeup-services/${id}`);
//         fetchServices();
//         toast.info("Service deleted successfully!"); // Info toast for delete
//       } catch (error) {
//         console.error('Error deleting service:', error.response?.data || error.message);
//         toast.error("Failed to delete service. Please try again."); // Error toast for failed delete
//       }
//     }
//   };

//   const handleEdit = (service) => {
//     setForm({
//       title: service.title,
//       duration: service.duration,
//       discount: service.discount,
//       price: service.price,
//       oldPrice: service.oldPrice,
//       categoryId: service.categoryId,
//       subcategoryId: service.subcategoryId,
//       advantages: Array.isArray(service.advantages)
//         ? service.advantages.join(',')
//         : JSON.parse(service.advantages || '[]').join(','), // Handle JSON string for advantages
//       image: null, // Don't pre-fill file input
//       imagePreview: service.image ? `${IMAGE_BASE_URL}${service.image}` : null, // Show existing image
//     });
//     setEditingId(service.id);
//     setShowForm(true); // Show form when editing
//   };

//   return (
//     <div className='servicetable-wrapper'> {/* Applied wrapper class */}
//       {/* ToastContainer must be rendered once in your app, ideally at a high level */}
//       {/* <ToastContainer
//         position="top-right"
//         autoClose={3000} // toasts disappear after 3 seconds
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored" // Provides different default styles for success, error, info, warn
//       /> */}

//       <h2 className='servicetable-title'>Makeup Services</h2> {/* Applied title class */}

//       {/* ➕ Add Button */}
//       <div className="servicetable-add-button" onClick={() => { resetForm(); setShowForm(true); }}>
//         <FaPlus /> Add Service
//       </div>

//       {/* 🧾 Add/Edit Form (Popup) */}
//       {showForm && (
//         <div className="servicetable-modal-overlay">
//           <div className="servicetable-glass-form">
//             <button
//               className="servicetable-close-icon"
//               onClick={resetForm}
//               title="Close"
//             >
//               <FaTimes />
//             </button>

//             <form onSubmit={(e) => e.preventDefault()} className="servicetable-form">
//               <div className="input-row">
//                 <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Title" required />
//                 <input name="duration" type="text" value={form.duration} onChange={handleChange} placeholder="Duration" required />
//               </div>

//               <div className="input-row">
//                 <input name="discount" type="number" value={form.discount} onChange={handleChange} placeholder="Discount (%)" />
//                 <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required />
//               </div>

//               <div className="input-row">
//                 <input name="oldPrice" type="number" value={form.oldPrice} onChange={handleChange} placeholder="Old Price" />
//                 <input name="advantages" type="text" value={form.advantages} onChange={handleChange} placeholder="Advantages (comma-separated)" />
//               </div>

//               <div className="input-row">
//                 <select name="categoryId" value={form.categoryId} onChange={handleChange} required>
//                   <option value="">Select Category</option>
//                   {categories.map((c) => (
//                     <option key={c.id} value={c.id}>{c.name}</option>
//                   ))}
//                 </select>

//                 {/* <select name="subcategoryId" value={form.subcategoryId} onChange={handleChange} required>
//                   <option value="">Select Subcategory</option>
//                   {subcategories.map((s) => (
//                     <option key={s.id} value={s.id}>{s.name}</option>
//                   ))}
//                 </select> */}

//                 <select name="subcategoryId" value={form.subcategoryId} onChange={handleChange} required>
//   <option value="">Select Subcategory</option>
//   {filteredSubcategories.length === 0 ? (
//     <option disabled>No subcategories available</option>
//   ) : (
//     filteredSubcategories.map((s) => (
//       <option key={s.id} value={s.id}>{s.name}</option>
//     ))
//   )}
// </select>

//               </div>

//               <input type="file" name="image" onChange={handleChange} />

//               {(form.imagePreview || (editingId && services.find(s => s.id === editingId)?.image)) && (
//                 <div className="current-image-preview">
//                   {form.imagePreview ? (
//                     <>
//                       {/* <span>New Preview:</span> */}
//                       <img src={form.imagePreview} alt="New Preview" style={{ width: '100px', height: '50px', objectFit: 'cover' }} />
//                     </>
//                   ) : (
//                     <>
//                       <span>Current:</span>
//                       <img src={`${IMAGE_BASE_URL}${services.find(s => s.id === editingId)?.image}`} alt="Current" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
//                     </>
//                   )}
//                 </div>
//               )}

//               <div className="servicetable-form-buttons">
//                 <button onClick={handleSubmit}>{editingId ? 'Update' : 'Add'}</button>
//                 <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
//               </div>
//             </form>

//           </div>
//         </div>
//       )}

//       {/* --- */}
//       {/* 📋 Service Table */}
//       <table className="servicetable-table"> {/* Applied table class */}
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Duration</th>
//             <th>Discount</th>
//             <th>Price</th>
//             <th>Old Price</th>
//             <th>Category</th>
//             <th>Subcategory</th>
//             <th>Advantages</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {services.map((s) => (
//             <tr key={s.id}>
//               <td>{s.title}</td>
//               <td>{s.duration}</td>
//               <td>{s.discount}%</td>
//               <td>{s.price}</td>
//               <td>{s.oldPrice}</td>
//               <td>{s.categoryName}</td>
//               <td>{s.subcategoryName}</td>
//               <td>
//                 <ul className="adv-list"> {/* Applied list styling */}
//                   {(Array.isArray(s.advantages)
//                     ? s.advantages
//                     : (() => {
//                         try {
//                           const parsed = JSON.parse(s.advantages || '[]');
//                           return Array.isArray(parsed) ? parsed : [];
//                         } catch (e) {
//                           // Fallback for malformed string, try to split
//                           return String(s.advantages || '')
//                             .replace(/\[|\]|"|'/g, '')
//                             .split(/,/)
//                             .map((a) => a.trim())
//                             .filter(Boolean);
//                         }
//                       })()
//                   ).map((adv, idx) => (
//                     <li key={idx}>{adv}</li>
//                   ))}
//                 </ul>
//               </td>
//               <td>
//                 {s.image && (
//                   <img
//                     src={`${IMAGE_BASE_URL}${s.image}`}
//                     alt={s.title}
//                     style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                   />
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(s)} title="Edit"><FaEdit /></button>
//                 <button onClick={() => handleDelete(s.id)} title="Delete"><FaTrash /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ServiceTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceTable.css';
import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceTable = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const [form, setForm] = useState({
    title: '',
    duration: '',
    discount: '',
    price: '',
    oldPrice: '',
    categoryId: '',
    subcategoryId: '',
    advantages: '',
    image: null,
    imagePreview: null,
  });

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null); // for delete
  const [showDeletePopup, setShowDeletePopup] = useState(false); // for popup

  const BASE = 'http://localhost:5000/api';
  const IMAGE_BASE_URL = 'http://localhost:5000/uploads/';

  const filteredSubcategories = subcategories.filter(
    (sub) => String(sub.categoryId) === String(form.categoryId)
  );

  useEffect(() => {
    fetchServices();
    fetchDropdowns();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${BASE}/makeup-services`);
      setServices(res.data);
    } catch (error) {
      toast.error("Failed to fetch services.");
    }
  };

  const fetchDropdowns = async () => {
    try {
      const [catRes, subRes] = await Promise.all([
        axios.get(`${BASE}/categories`),
        axios.get(`${BASE}/subcategories`),
      ]);
      setCategories(catRes.data);
      setSubcategories(subRes.data);
    } catch (error) {
      toast.error("Failed to load categories or subcategories.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm((prev) => ({
        ...prev,
        image: files[0],
        imagePreview: files[0] ? URL.createObjectURL(files[0]) : null,
      }));
    } else if (name === 'categoryId') {
      setForm((prev) => ({
        ...prev,
        categoryId: value,
        subcategoryId: '',
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const resetForm = () => {
    setForm({
      title: '',
      duration: '',
      discount: '',
      price: '',
      oldPrice: '',
      categoryId: '',
      subcategoryId: '',
      advantages: '',
      image: null,
      imagePreview: null,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.duration.trim() || !form.categoryId || !form.subcategoryId || form.price === '' || isNaN(form.price)) {
      toast.warn("Please fill in all required fields.");
      return;
    }

    if (!editingId && !form.image) {
      toast.warn("Please select an image for the new service.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'advantages') {
        const advArray = value.split(',').map(a => a.trim()).filter(Boolean);
        formData.append(key, JSON.stringify(advArray));
      } else if (key === 'image' && value) {
        formData.append(key, value);
      } else if (value !== null && key !== 'imagePreview' && key !== 'image') {
        formData.append(key, value);
      }
    });

    try {
      if (editingId) {
        await axios.put(`${BASE}/makeup-services/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success("Service updated successfully!");
      } else {
        await axios.post(`${BASE}/makeup-services`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success("Service added successfully!");
      }
      resetForm();
      fetchServices();
    } catch (error) {
      toast.error("Failed to save service.");
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`${BASE}/makeup-services/${deleteId}`);
      toast.info("Service deleted successfully!");
      setShowDeletePopup(false);
      setDeleteId(null);
      fetchServices();
    } catch (error) {
      toast.error("Failed to delete service.");
    }
  };

  const handleEdit = (service) => {
    setForm({
      title: service.title,
      duration: service.duration,
      discount: service.discount,
      price: service.price,
      oldPrice: service.oldPrice,
      categoryId: service.categoryId,
      subcategoryId: service.subcategoryId,
      advantages: Array.isArray(service.advantages)
        ? service.advantages.join(',')
        : JSON.parse(service.advantages || '[]').join(','),
      image: null,
      imagePreview: service.image ? `${IMAGE_BASE_URL}${service.image}` : null,
    });
    setEditingId(service.id);
    setShowForm(true);
  };

  return (
    <div className='servicetable-wrapper'>
      <h2 className='servicetable-title'>Makeup Services</h2>

      <div className="servicetable-add-button" onClick={() => { resetForm(); setShowForm(true); }}>
        <FaPlus /> Add Service
      </div>

      {showForm && (
        <div className="servicetable-modal-overlay">
          <div className="servicetable-glass-form">
            <button className="servicetable-close-icon" onClick={resetForm}><FaTimes /></button>
            <form onSubmit={(e) => e.preventDefault()} className="servicetable-form">
              <div className="input-row">
                <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Title" required />
                <input name="duration" type="text" value={form.duration} onChange={handleChange} placeholder="Duration" required />
              </div>
              <div className="input-row">
                <input name="discount" type="number" value={form.discount} onChange={handleChange} placeholder="Discount (%)" />
                <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required />
              </div>
              <div className="input-row">
                <input name="oldPrice" type="number" value={form.oldPrice} onChange={handleChange} placeholder="Old Price" />
                <input name="advantages" type="text" value={form.advantages} onChange={handleChange} placeholder="Advantages (comma-separated)" />
              </div>
              <div className="input-row">
                <select name="categoryId" value={form.categoryId} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <select name="subcategoryId" value={form.subcategoryId} onChange={handleChange} required>
                  <option value="">Select Subcategory</option>
                  {filteredSubcategories.length === 0 ? (
                    <option disabled>No subcategories available</option>
                  ) : (
                    filteredSubcategories.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))
                  )}
                </select>
              </div>

              <input type="file" name="image" onChange={handleChange} />

              {form.imagePreview && (
                <div className="current-image-preview">
                  <img src={form.imagePreview} alt="Preview" style={{ width: '100px', height: '50px', objectFit: 'cover' }} />
                </div>
              )}

              <div className="servicetable-form-buttons">
                <button onClick={handleSubmit}>{editingId ? 'Update' : 'Add'}</button>
                <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Delete Confirmation Glass Popup */}
      {showDeletePopup && (
        <div className="servicetable-delete-modal-overlay">
          <div className="servicetable-delete-glass-card">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this service?</p>
            <div className="servicetable-delete-buttons">
              <button className="confirm-btn" onClick={handleDeleteConfirmed}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setShowDeletePopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <table className="servicetable-table">
        <thead>
          <tr>
            <th>Title</th><th>Duration</th><th>Discount</th><th>Price</th><th>Old Price</th>
            <th>Category</th><th>Subcategory</th><th>Advantages</th><th>Image</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.id}>
              <td>{s.title}</td>
              <td>{s.duration}</td>
              <td>{s.discount}%</td>
              <td>{s.price}</td>
              <td>{s.oldPrice}</td>
              <td>{s.categoryName}</td>
              <td>{s.subcategoryName}</td>
              <td>
                <ul className="adv-list">
                  {(Array.isArray(s.advantages)
                    ? s.advantages
                    : (() => {
                        try {
                          const parsed = JSON.parse(s.advantages || '[]');
                          return Array.isArray(parsed) ? parsed : [];
                        } catch {
                          return String(s.advantages || '').split(',').map(a => a.trim()).filter(Boolean);
                        }
                      })()
                  ).map((adv, i) => <li key={i}>{adv}</li>)}
                </ul>
              </td>
              <td>
                {s.image && (
                  <img src={`${IMAGE_BASE_URL}${s.image}`} alt={s.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(s)} title="Edit"><FaEdit /></button>
                <button onClick={() => confirmDelete(s.id)} title="Delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
