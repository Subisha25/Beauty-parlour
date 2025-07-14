
// // // CategoryTable.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Tables/CategoryTable.css';
// import SubcategoryTable from './SubcategoryTable'; // Remove if you're externalizing this as discussed previously
// import ServiceTable from './ServiceTable';     // Remove if you're externalizing this as discussed previously
// import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

// // Import react-toastify components
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS!

// const CategoryTable = () => {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [editingImage, setEditingImage] = useState('');
//   const [showForm, setShowForm] = useState(false); // 👈 Show/Hide glass form

//   const BASE_URL = 'http://localhost:5000/api/categories';
//   const IMAGE_UPLOAD_URL = 'http://localhost:5000/uploads/'; // Adjust if your image serving path is different

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(BASE_URL);
//       setCategories(res.data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       toast.error("Failed to fetch categories."); // Display error toast
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleAddOrUpdate = async () => {
//     // Basic validation
//     if (!name.trim()) {
//       toast.warn("Category name cannot be empty.");
//       return;
//     }
//     if (!editingId && !image) {
//       toast.warn("Please select an image for the new category.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     if (image) { // Only append image if a new one is selected
//       formData.append('image', image);
//     }

//     try {
//       if (editingId) {
//         await axios.put(`${BASE_URL}/${editingId}`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         toast.success("Category updated successfully!"); // Success toast for update
//       } else {
//         await axios.post(BASE_URL, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         toast.success("Category added successfully!"); // Success toast for add
//       }

//       // Reset form and close it
//       resetForm();
//       fetchCategories(); // Refresh the list
//     } catch (error) {
//       console.error("Error adding/updating category:", error);
//       toast.error("Failed to save category. Please try again."); // Error toast for failed save
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this category?")) {
//       try {
//         await axios.delete(`${BASE_URL}/${id}`);
//         fetchCategories();
//         toast.info("Category deleted successfully!"); // Info toast for delete
//       } catch (error) {
//         console.error("Error deleting category:", error);
//         toast.error("Failed to delete category. Please try again."); // Error toast for failed delete
//       }
//     }
//   };

//   const startEdit = (cat) => {
//     setName(cat.name);
//     setEditingId(cat.id);
//     setEditingImage(cat.image); // Store existing image name if any
//     setShowForm(true); // Show form when editing
//   };

//   const resetForm = () => {
//     setName('');
//     setImage(null);
//     setEditingId(null);
//     setEditingImage('');
//     setShowForm(false);
//   };

//   return (
//     <div className='categorytable-wrapper'>
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

//       <h2 className='categorytable-title'>Categories</h2>

//       {/* ➕ Add Button */}
//       <div
//         className="categorytable-add-button"
//         onClick={() => {
//           resetForm(); // reset the fields first
//           setShowForm(true); // then show the form
//         }}
//       >
//         <FaPlus /> Add Category
//       </div>


//       {/* Glass Form (Popup) */}
//       {showForm && (
//         <div className="categorytable-modal-overlay">
//           <div className="categorytable-glass-form">

//             {/* ❌ Close icon */}
//             <button
//               className="categorytable-close-icon"
//               onClick={resetForm}
//               title="Close"
//             >
//               &times;
//             </button>

//             <form onSubmit={(e) => e.preventDefault()} className='categorytable-form'>
//               <input
//                 type="text"
//                 value={name}
//                 placeholder="Category name"
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <input
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />

//               {/* Show preview only when adding (not editing) */}
//               {!editingId && image && (
//                 <div style={{ marginTop: '10px' }}>
//                   <img
//                     src={URL.createObjectURL(image)}
//                     alt="Preview"
//                     width="80"
//                     style={{ borderRadius: '8px' }}
//                   />
//                 </div>
//               )}

//               {/* Show existing image only when editing */}
//               {editingId && editingImage && (
//                 <p style={{ color: 'white', fontSize: '0.9em', margin: '-5px 0 5px 0' }}>

//                   <img
//                     src={`${IMAGE_UPLOAD_URL}${editingImage}`}
//                     alt="Current"
//                     width="100" // 👈 Increased from 30 to 100
//                     style={{
//                       verticalAlign: 'middle',
//                       marginLeft: '10px',
//                       borderRadius: '8px', // more rounded
//                       height: 'auto', // maintain aspect ratio
//                     }}
//                   />

//                 </p>
//               )}


//               <div className="categorytable-form-buttons">
//                 <button onClick={handleAddOrUpdate}>
//                   {editingId ? 'Update' : 'Add'}
//                 </button>
//                 <button type="button" className="cancel-btn" onClick={resetForm}>
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <table className="categorytable-table">
//         <thead>
//           <tr><th>Name</th><th>Image</th><th>Actions</th></tr>
//         </thead>
//         <tbody>
//           {categories.map((cat) => (
//             <tr key={cat.id}>
//               <td>{cat.name}</td>
//               <td>
//                 {cat.image ? (
//                   <img
//                     src={`${IMAGE_UPLOAD_URL}${cat.image}`}
//                     alt={cat.name}
//                     width="60"
//                   />
//                 ) : 'No image'}
//               </td>
//               <td>
//                 <button onClick={() => startEdit(cat)} title="Edit"><FaEdit /></button>
//                 <button onClick={() => handleDelete(cat.id)} title="Delete"><FaTrash /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

      
//       <SubcategoryTable />
//       <ServiceTable />
      
//     </div>
//   );
// };

// export default CategoryTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Tables/CategoryTable.css';
import SubcategoryTable from './SubcategoryTable';
import ServiceTable from './ServiceTable';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editingImage, setEditingImage] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Delete popup states
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const BASE_URL = 'http://localhost:5000/api/categories';
  const IMAGE_UPLOAD_URL = 'http://localhost:5000/uploads/';

  const fetchCategories = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddOrUpdate = async () => {
    if (!name.trim()) {
      toast.warn("Category name cannot be empty.");
      return;
    }
    if (!editingId && !image) {
      toast.warn("Please select an image for the new category.");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (editingId) {
        await axios.put(`${BASE_URL}/${editingId}`, formData);
        toast.success("Category updated successfully!");
      } else {
        await axios.post(BASE_URL, formData);
        toast.success("Category added successfully!");
      }
      resetForm();
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
      toast.error("Failed to save category.");
    }
  };

 const handleDelete = async () => {
  try {
    const res = await axios.delete(`${BASE_URL}/${categoryToDelete}`);
    if (res.status === 200 || res.status === 204) {
      toast.success("Category deleted successfully!");
      fetchCategories(); // refresh list
    } else {
      toast.error("Delete failed.");
    }
  } catch (error) {
    console.error("Error deleting category:", error.response?.data || error.message);
    toast.error("Failed to delete category.");
  } finally {
    setShowDeletePopup(false);
    setCategoryToDelete(null);
  }
};

  const startEdit = (cat) => {
    setName(cat.name);
    setEditingId(cat.id);
    setEditingImage(cat.image);
    setShowForm(true);
  };

  const resetForm = () => {
    setName('');
    setImage(null);
    setEditingId(null);
    setEditingImage('');
    setShowForm(false);
  };

  return (
    <div className='categorytable-wrapper'>
      <h2 className='categorytable-title'>Categories</h2>

      <div
        className="categorytable-add-button"
        onClick={() => {
          resetForm();
          setShowForm(true);
        }}
      >
        <FaPlus /> Add Category
      </div>

      {/* Glass Form */}
      {showForm && (
        <div className="categorytable-modal-overlay">
          <div className="categorytable-glass-form">
            <button className="categorytable-close-icon" onClick={resetForm}>&times;</button>

            <form onSubmit={(e) => e.preventDefault()} className='categorytable-form'>
              <input
                type="text"
                value={name}
                placeholder="Category name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input type="file" onChange={(e) => setImage(e.target.files[0])} />

              {/* {!editingId && image && (
                <div style={{ marginTop: '10px' }}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    width="80"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              )}

              {editingId && editingImage && (
                <div style={{ marginTop: '10px' }}>
                  <img
                    src={`${IMAGE_UPLOAD_URL}${editingImage}`}
                    alt="Current"
                    width="100"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              )} */}


{image ? (
  <div style={{ marginTop: '10px' }}>
    <img
      src={URL.createObjectURL(image)}
      alt="Preview"
      width="100"
      style={{ borderRadius: '8px' }}
    />
  </div>
) : editingId && editingImage ? (
  <div style={{ marginTop: '10px' }}>
    <img
      src={`${IMAGE_UPLOAD_URL}${editingImage}`}
      alt="Current"
      width="100"
      style={{ borderRadius: '8px' }}
    />
  </div>
) : null}

              <div className="categorytable-form-buttons">
                <button onClick={handleAddOrUpdate}>{editingId ? 'Update' : 'Add'}</button>
                <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeletePopup && (
        <div className="categorydelete-modal-overlay">
          <div className="categorydelete-glass-form">
            <span className="modal-close" onClick={() => setShowDeletePopup(false)}>&times;</span>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this category?</p>
            <div className="form-buttons">
              <button onClick={() => setShowDeletePopup(false)}>Cancel</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      <table className="categorytable-table">
        <thead>
          <tr><th>Name</th><th>Image</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.name}</td>
              <td>
                {cat.image ? (
                  <img src={`${IMAGE_UPLOAD_URL}${cat.image}`} alt={cat.name} width="60" />
                ) : 'No image'}
              </td>
              <td>
                <button onClick={() => startEdit(cat)} title="Edit"><FaEdit /></button>
                <button
                  onClick={() => {
                    setShowDeletePopup(true);
                    setCategoryToDelete(cat.id);
                  }}
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <SubcategoryTable /> */}
      {/* <ServiceTable /> */}
    </div>
  );
};

export default CategoryTable;
