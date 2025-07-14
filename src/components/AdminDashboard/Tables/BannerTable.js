// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import './BannerTable.css'; // Reuse your CSS with new classnames

// const BannerTable = () => {
//   const [banners, setBanners] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ title: '', subtitle: '', image: null });
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editId, setEditId] = useState(null);

//   const fetchBanners = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/banner');
//       setBanners(res.data);
//     } catch (err) {
//       console.error('Fetch error:', err);
//     }
//   };

//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const bannerData = new FormData();
//     bannerData.append('title', formData.title);
//     bannerData.append('subtitle', formData.subtitle);
//     if (formData.image) bannerData.append('image', formData.image);

//     try {
//       if (isEditMode) {
//         await axios.put(`http://localhost:5000/api/banner/${editId}`, bannerData);
//       } else {
//         await axios.post('http://localhost:5000/api/banner', bannerData);
//       }
//       fetchBanners();
//       setShowForm(false);
//       setFormData({ title: '', subtitle: '', image: null });
//       setIsEditMode(false);
//       setEditId(null);
//     } catch (error) {
//       console.error('Submit error:', error);
//     }
//   };

//   const handleEdit = (banner) => {
//     setFormData({
//       title: banner.title,
//       subtitle: banner.subtitle,
//       image: null,
//     });
//     setIsEditMode(true);
//     setEditId(banner.id);
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this banner?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/banner/${id}`);
//         fetchBanners();
//       } catch (error) {
//         console.error('Delete error:', error);
//       }
//     }
//   };

//   return (
//     <div className="categorytable-wrapper">
//       <button
//   className="categorytable-add-button"
//   onClick={() => {
//     setShowForm(true);
//     setFormData({ title: '', subtitle: '', image: null }); // Clear form
//     setIsEditMode(false); // Set mode to add
//     setEditId(null);
//   }}
// >
//   + Add Banner
// </button>


//       {showForm && (
//         <div className="categorytable-modal-overlay">
//           <div className="categorytable-glass-form">
//            <button
//   className="categorytable-close-icon"
//   onClick={() => {
//     setShowForm(false);
//     setFormData({ title: '', subtitle: '', image: null });
//     setIsEditMode(false);
//     setEditId(null);
//   }}
// >
//   &times;
// </button>

//             <h2 className="categorytable-title">{isEditMode ? 'Edit Banner' : 'Add Banner'}</h2>
//          <form className="categorytable-form" onSubmit={handleSubmit}>
//   <input
//     type="text"
//     name="title"
//     placeholder="Banner Title"
//     value={formData.title}
//     onChange={handleInputChange}
//     required
//   />
//   <input
//     type="text"
//     name="subtitle"
//     placeholder="Banner Subtitle"
//     value={formData.subtitle}
//     onChange={handleInputChange}
//     required
//   />
//   <input type="file" name="image" onChange={handleInputChange} accept="image/*" />

//   {/* Show preview image when editing */}
//   {isEditMode && banners.length > 0 && (
//     <div className="image-preview" style={{ marginTop: '10px' }}>
//       <p>Current Image:</p>
//       <img
//         src={`http://localhost:5000${banners.find((b) => b.id === editId)?.image}`}
//         alt="Preview"
//         width="100"
//       />
//     </div>
//   )}

//   <div className="categorytable-form-buttons">
//     <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
//     <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
//       Cancel
//     </button>
//   </div>
// </form>

//           </div>
//         </div>
//       )}

//       <table className="categorytable-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Banner Image</th>
//             <th>Title</th>
//             <th>Subtitle</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {banners.map((banner, index) => (
//             <tr key={banner.id}>
//               <td>{index + 1}</td>
//               <td>
//   <img src={`http://localhost:5000${banner.image}`} alt="Banner" width="80" />
// </td>

//               <td>{banner.title}</td>
//               <td>{banner.subtitle}</td>
//               <td>
//                 <button onClick={() => handleEdit(banner)}><FaEdit /></button>
//                 <button onClick={() => handleDelete(banner.id)}><FaTrash /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BannerTable;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaTimes } from 'react-icons/fa';
import './BannerTable.css';
import { toast } from 'react-toastify';

const BannerTable = () => {
  const [banners, setBanners] = useState([]);
  const [formData, setFormData] = useState({ title: '', subtitle: '', image: null });
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const baseURL = 'http://localhost:5000/api/banner';
  const IMAGE_BASE = 'http://localhost:5000';

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const res = await axios.get(baseURL);
      setBanners(res.data);
    } catch (err) {
      toast.error('Failed to fetch banners');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const resetForm = () => {
    setFormData({ title: '', subtitle: '', image: null });
    setImagePreview(null);
    setEditId(null);
    setIsEditMode(false);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bannerData = new FormData();
    bannerData.append('title', formData.title);
    bannerData.append('subtitle', formData.subtitle);
    if (formData.image) {
      bannerData.append('image', formData.image);
    }

    try {
      if (isEditMode && editId) {
        await axios.put(`${baseURL}/${editId}`, bannerData);
        toast.success('Banner updated successfully');
      } else {
        await axios.post(baseURL, bannerData);
        toast.success('Banner added successfully');
      }
      resetForm();
      fetchBanners();
    } catch (err) {
      toast.error('Banner submit failed');
    }
  };

  const handleEdit = (banner) => {
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle,
      image: null,
    });
    setImagePreview(`${IMAGE_BASE}${banner.image}`);
    setEditId(banner.id);
    setIsEditMode(true);
    setShowForm(true);
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`${baseURL}/${deleteId}`);
      toast.info('Banner deleted successfully');
      setShowDeletePopup(false);
      setDeleteId(null);
      fetchBanners();
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="servicetable-wrapper">
      <h2 className="servicetable-title">Banner Section</h2>

      <div className="servicetable-add-button" onClick={() => setShowForm(true)}>
        <FaPlus /> Add Banner
      </div>

      {/* Glass Form Modal */}
      {showForm && (
        <div className="servicetable-modal-overlay">
          <div className="servicetable-glass-form">
            <button className="servicetable-close-icon" onClick={resetForm}><FaTimes /></button>
            <form onSubmit={handleSubmit} className="servicetable-form">
              <input
                type="text"
                name="title"
                placeholder="Banner Title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="subtitle"
                placeholder="Banner Subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                required
              />
              <input type="file" name="image" onChange={handleInputChange} accept="image/*" />

              {imagePreview && (
                <div className="current-image-preview">
                  <img src={imagePreview} alt="Preview" width="100" />
                </div>
              )}

              <div className="servicetable-form-buttons">
                <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
                <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeletePopup && (
        <div className="servicetable-delete-modal-overlay">
          <div className="servicetable-delete-glass-card">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this banner?</p>
            <div className="servicetable-delete-buttons">
              <button className="confirm-btn" onClick={handleDeleteConfirmed}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setShowDeletePopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Banner Table */}
      <table className="servicetable-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Banner Image</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {banners.map((banner, index) => (
            <tr key={banner.id}>
              <td>{index + 1}</td>
              <td>
                <img src={`${IMAGE_BASE}${banner.image}`} alt="Banner" width="80" />
              </td>
              <td>{banner.title}</td>
              <td>{banner.subtitle}</td>
              <td>
                <button onClick={() => handleEdit(banner)} title="Edit"><FaEdit /></button>
                <button onClick={() => confirmDelete(banner.id)} title="Delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BannerTable;
