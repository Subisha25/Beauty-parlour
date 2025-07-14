// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';
// // import './AboutUsTable.css';

// // const AboutUsTable = () => {
// //   const [aboutList, setAboutList] = useState([]);
// //   const [showForm, setShowForm] = useState(false);
// //   const [editIndex, setEditIndex] = useState(null);
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     subtitle: '',
// //     image1: null,
// //     image2: null,
// //   });
// //   const [message, setMessage] = useState({ type: '', text: '' });

// //   const baseURL = 'http://localhost:5000/api/aboutus';

// //   useEffect(() => {
// //     fetchAboutUs();
// //   }, []);

// //   const fetchAboutUs = async () => {
// //     try {
// //       const res = await axios.get(baseURL);
// //       setAboutList(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value, files } = e.target;
// //     if (files) {
// //       setFormData({ ...formData, [name]: files[0] });
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };

// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = new FormData();
// //     data.append('title', formData.title);
// //     data.append('subtitle', formData.subtitle);
// //     if (formData.image1) data.append('image1', formData.image1);
// //     if (formData.image2) data.append('image2', formData.image2);

// //     try {
// //       if (editIndex !== null) {
// //         await axios.put(`${baseURL}/${aboutList[editIndex].id}`, data);
// //         setMessage({ type: 'update', text: 'Updated successfully!' });
// //       } else {
// //         await axios.post(baseURL, data);
// //         setMessage({ type: 'add', text: 'Added successfully!' });
// //       }

// //       setShowForm(false);
// //       setFormData({ title: '', subtitle: '', image1: null, image2: null });
// //       setEditIndex(null);
// //       fetchAboutUs();

// //       setTimeout(() => setMessage({ type: '', text: '' }), 3000);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleEdit = (index) => {
// //     const item = aboutList[index];
// //     setFormData({
// //       title: item.title,
// //       subtitle: item.subtitle,
// //       image1: null,
// //       image2: null,
// //     });
// //     setEditIndex(index);
// //     setShowForm(true);
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm('Are you sure you want to delete this entry?')) {
// //       try {
// //         await axios.delete(`${baseURL}/${id}`);
// //         fetchAboutUs();
// //         setMessage({ type: 'delete', text: 'Deleted successfully!' });
// //         setTimeout(() => setMessage({ type: '', text: '' }), 3000);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="aboutus-wrapper">
// //       <h2 className="aboutus-title">About Us Section</h2>

// //       {message.text && (
// //         <div className={`aboutus-message ${message.type}`}>
// //           {message.text}
// //         </div>
// //       )}

// //       <button
// //         className="aboutus-add-button"
// //         onClick={() => {
// //           setShowForm(true);
// //           setEditIndex(null);
// //           setFormData({ title: '', subtitle: '', image1: null, image2: null });
// //         }}
// //       >
// //         <FaPlus /> Add About Us
// //       </button>

// //       <table className="aboutus-table">
// //         <thead>
// //           <tr>
// //             <th>Title</th>
// //             <th>Subtitle</th>
// //             <th>Image 1</th>
// //             <th>Image 2</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {aboutList.map((item, index) => (
// //             <tr key={item.id}>
// //               <td>{item.title}</td>
// //               <td>{item.subtitle}</td>
// //               <td>
// // <img src={`http://localhost:5000${item.image1}`} alt="img1" width="80" />
// //               </td>
// //               <td>
// // <img src={`http://localhost:5000${item.image2}`} alt="img2" width="80" />
// //               </td>
// //               <td>
// //                 <button onClick={() => handleEdit(index)}><FaEdit /></button>
// //                 <button onClick={() => handleDelete(item.id)}><FaTrash /></button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {showForm && (
// //         <div className="aboutus-modal-overlay">
// //           <div className="aboutus-glass-form">
// //             <button className="aboutus-close-icon" onClick={() => setShowForm(false)}>
// //               <FaTimes />
// //             </button>
// //             <form className="aboutus-form" onSubmit={handleFormSubmit}>
// //               <input
// //                 type="text"
// //                 name="title"
// //                 placeholder="Enter title"
// //                 value={formData.title}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 name="subtitle"
// //                 placeholder="Enter subtitle"
// //                 value={formData.subtitle}
// //                 onChange={handleInputChange}
// //                 required
// //               />
// //               <input
// //                 type="file"
// //                 name="image1"
// //                 accept="image/*"
// //                 onChange={handleInputChange}
// //               />
// //               <input
// //                 type="file"
// //                 name="image2"
// //                 accept="image/*"
// //                 onChange={handleInputChange}
// //               />

// //               <div className="aboutus-form-buttons">
// //                 <button type="submit">
// //                   {editIndex !== null ? 'Update' : 'Add'}
// //                 </button>
// //                 <button
// //                   type="button"
// //                   className="cancel-btn"
// //                   onClick={() => setShowForm(false)}
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AboutUsTable;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';
// import './AboutUsTable.css';

// const AboutUsTable = () => {
//   const [aboutList, setAboutList] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     subtitle: '',
//     happyClient: '',
//     experience: '',
//     image1: null,
//     image2: null,
//   });
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const baseURL = 'http://localhost:5000/api/aboutus';

//   useEffect(() => {
//     fetchAboutUs();
//   }, []);

//   const fetchAboutUs = async () => {
//     try {
//       const res = await axios.get(baseURL);
//       setAboutList(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append('title', formData.title);
//     data.append('subtitle', formData.subtitle);
//     data.append('happyClient', formData.happyClient);
//     data.append('experience', formData.experience);
//     if (formData.image1) data.append('image1', formData.image1);
//     if (formData.image2) data.append('image2', formData.image2);

//     try {
//       if (editIndex !== null) {
//         await axios.put(`${baseURL}/${aboutList[editIndex].id}`, data);
//         setMessage({ type: 'update', text: 'Updated successfully!' });
//       } else {
//         await axios.post(baseURL, data);
//         setMessage({ type: 'add', text: 'Added successfully!' });
//       }

//       setShowForm(false);
//       setFormData({
//         title: '',
//         subtitle: '',
//         happyClient: '',
//         experience: '',
//         image1: null,
//         image2: null,
//       });
//       setEditIndex(null);
//       fetchAboutUs();

//       setTimeout(() => setMessage({ type: '', text: '' }), 3000);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (index) => {
//     const item = aboutList[index];
//     setFormData({
//       title: item.title,
//       subtitle: item.subtitle,
//       happyClient: item.happyClient,
//       experience: item.experience,
//       image1: null,
//       image2: null,
//     });
//     setEditIndex(index);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this entry?')) {
//       try {
//         await axios.delete(`${baseURL}/${id}`);
//         fetchAboutUs();
//         setMessage({ type: 'delete', text: 'Deleted successfully!' });
//         setTimeout(() => setMessage({ type: '', text: '' }), 3000);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   };

//   return (
//     <div className="aboutus-wrapper">
//       <h2 className="aboutus-title">About Us Section</h2>

//       {message.text && (
//         <div className={`aboutus-message ${message.type}`}>
//           {message.text}
//         </div>
//       )}

//       <button
//         className="aboutus-add-button"
//         onClick={() => {
//           setShowForm(true);
//           setEditIndex(null);
//           setFormData({
//             title: '',
//             subtitle: '',
//             happyClient: '',
//             experience: '',
//             image1: null,
//             image2: null,
//           });
//         }}
//       >
//         <FaPlus /> Add About Us
//       </button>

//       <table className="aboutus-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Subtitle</th>
//             <th>Happy Clients</th>
//             <th>Experience</th>
//             <th>Image 1</th>
//             <th>Image 2</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {aboutList.map((item, index) => (
//             <tr key={item.id}>
//               <td>{item.title}</td>
//               <td>{item.subtitle}</td>
//               <td>{item.happyClient}</td>
//               <td>{item.experience}</td>
//               <td>
//                 <img
//                   src={`http://localhost:5000${item.image1}`}
//                   alt="img1"
//                   width="80"
//                 />
//               </td>
//               <td>
//                 <img
//                   src={`http://localhost:5000${item.image2}`}
//                   alt="img2"
//                   width="80"
//                 />
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(index)}><FaEdit /></button>
//                 <button onClick={() => handleDelete(item.id)}><FaTrash /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showForm && (
//         <div className="aboutus-modal-overlay">
//           <div className="aboutus-glass-form">
//             <button className="aboutus-close-icon" onClick={() => setShowForm(false)}>
//               <FaTimes />
//             </button>
//             <form className="aboutus-form" onSubmit={handleFormSubmit}>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Enter title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="subtitle"
//                 placeholder="Enter subtitle"
//                 value={formData.subtitle}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="number"
//                 name="happyClient"
//                 placeholder="Enter number of Happy Clients"
//                 value={formData.happyClient}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="number"
//                 name="experience"
//                 placeholder="Enter number of Years of Experience"
//                 value={formData.experience}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="file"
//                 name="image1"
//                 accept="image/*"
//                 onChange={handleInputChange}
//               />
//               <input
//                 type="file"
//                 name="image2"
//                 accept="image/*"
//                 onChange={handleInputChange}
//               />

//               <div className="aboutus-form-buttons">
//                 <button type="submit">
//                   {editIndex !== null ? 'Update' : 'Add'}
//                 </button>
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={() => setShowForm(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutUsTable;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';
import './AboutUsTable.css';
import { toast } from 'react-toastify';

const AboutUsTable = () => {
  const [aboutList, setAboutList] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    happyClient: '',
    experience: '',
    image1: null,
    image2: null,
  });

  const [formImagePreview1, setFormImagePreview1] = useState(null);
  const [formImagePreview2, setFormImagePreview2] = useState(null);

  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const baseURL = 'http://localhost:5000/api/aboutus';
  const IMAGE_BASE_URL = 'http://localhost:5000';

  useEffect(() => {
    fetchAboutUs();
  }, []);

  const fetchAboutUs = async () => {
    try {
      const res = await axios.get(baseURL);
      setAboutList(res.data);
    } catch (err) {
      toast.error('Failed to fetch data');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      happyClient: '',
      experience: '',
      image1: null,
      image2: null,
    });
    setFormImagePreview1(null);
    setFormImagePreview2(null);
    setEditingIndex(null);
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      if (name === 'image1') setFormImagePreview1(URL.createObjectURL(file));
      if (name === 'image2') setFormImagePreview2(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      if (editingIndex !== null) {
        await axios.put(`${baseURL}/${aboutList[editingIndex].id}`, data);
        toast.success("Updated successfully");
      } else {
        await axios.post(baseURL, data);
        toast.success("Added successfully");
      }
      resetForm();
      fetchAboutUs();
    } catch (err) {
      toast.error("Submission failed");
    }
  };

  const handleEdit = (index) => {
    const item = aboutList[index];
    setFormData({
      title: item.title,
      subtitle: item.subtitle,
      happyClient: item.happyClient,
      experience: item.experience,
      image1: null,
      image2: null,
    });
    setFormImagePreview1(`${IMAGE_BASE_URL}${item.image1}`);
    setFormImagePreview2(`${IMAGE_BASE_URL}${item.image2}`);
    setEditingIndex(index);
    setShowForm(true);
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`${baseURL}/${deleteId}`);
      toast.info("Deleted successfully");
      setShowDeletePopup(false);
      setDeleteId(null);
      fetchAboutUs();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="servicetable-wrapper">
      <h2 className="servicetable-title">About Us Section</h2>

      {/* <div className="servicetable-add-button" onClick={() => {
        resetForm();
        setShowForm(true);
      }}>
        <FaPlus /> Add About
      </div> */}

      {showForm && (
        <div className="servicetable-modal-overlay">
          <div className="servicetable-glass-form">
            <button className="servicetable-close-icon" onClick={resetForm}><FaTimes /></button>
            <form onSubmit={handleSubmit} className="servicetable-form">
              <input name="title" type="text" placeholder="Title" value={formData.title} onChange={handleInputChange} required />
              <input name="subtitle" type="text" placeholder="Subtitle" value={formData.subtitle} onChange={handleInputChange} required />
              <input name="happyClient" type="number" placeholder="Happy Clients" value={formData.happyClient} onChange={handleInputChange} required />
              <input name="experience" type="number" placeholder="Years of Experience" value={formData.experience} onChange={handleInputChange} required />
              <input type="file" name="image1" onChange={handleInputChange} />
              {formImagePreview1 && <img src={formImagePreview1} alt="Preview 1" width="80" />}
              <input type="file" name="image2" onChange={handleInputChange} />
              {formImagePreview2 && <img src={formImagePreview2} alt="Preview 2" width="80" />}

              <div className="servicetable-form-buttons">
                <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
                <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirmation popup */}
      {showDeletePopup && (
        <div className="servicetable-delete-modal-overlay">
          <div className="servicetable-delete-glass-card">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this entry?</p>
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
            <th>Title</th>
            <th>Subtitle</th>
            <th>Happy Clients</th>
            <th>Experience</th>
            <th>Image 1</th>
            <th>Image 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aboutList.map((item, index) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.subtitle}</td>
              <td>{item.happyClient}</td>
              <td>{item.experience}</td>
              <td>
                <img src={`${IMAGE_BASE_URL}${item.image1}`} alt="Image 1" width="60" />
              </td>
              <td>
                <img src={`${IMAGE_BASE_URL}${item.image2}`} alt="Image 2" width="60" />
              </td>
              <td>
                <button onClick={() => handleEdit(index)}><FaEdit /></button>
                <button onClick={() => confirmDelete(item.id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutUsTable;
