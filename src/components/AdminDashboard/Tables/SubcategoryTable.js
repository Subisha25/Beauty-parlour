// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './SubcategoryTable.css'; // ✅ Import the new CSS file
// // import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa'; // ✅ Import icons

// // const SubcategoryTable = () => {
// //   const [subcategories, setSubcategories] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [name, setName] = useState('');
// //   const [categoryId, setCategoryId] = useState('');
// //   const [editingId, setEditingId] = useState(null);
// //   const [showForm, setShowForm] = useState(false); // ✅ State to control form visibility

// //   const BASE_URL = 'http://localhost:5000/api/subcategories';

// //   const fetchData = async () => {
// //     try {
// //       const [subsRes, catsRes] = await Promise.all([
// //         axios.get(BASE_URL),
// //         axios.get('http://localhost:5000/api/categories')
// //       ]);
// //       setSubcategories(subsRes.data);
// //       setCategories(catsRes.data);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //       alert("Failed to load data. Please try again.");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const resetForm = () => {
// //     setName('');
// //     setCategoryId('');
// //     setEditingId(null);
// //     setShowForm(false); // Close the form
// //   };

// //   const handleAddOrUpdate = async () => {
// //     if (!name.trim() || !categoryId) {
// //       alert("Please fill in all fields (Subcategory name and Category).");
// //       return;
// //     }

// //     try {
// //       if (editingId) {
// //         await axios.put(`${BASE_URL}/${editingId}`, { name, categoryId });
// //       } else {
// //         await axios.post(BASE_URL, { name, categoryId });
// //       }

// //       resetForm();
// //       fetchData(); // Refresh data
// //     } catch (error) {
// //       console.error("Error adding/updating subcategory:", error.response?.data || error.message);
// //       alert("Failed to save subcategory. Please try again.");
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm("Are you sure you want to delete this subcategory?")) {
// //       try {
// //         await axios.delete(`${BASE_URL}/${id}`);
// //         fetchData();
// //       } catch (error) {
// //         console.error("Error deleting subcategory:", error.response?.data || error.message);
// //         alert("Failed to delete subcategory. Please try again.");
// //       }
// //     }
// //   };

// //   const handleEdit = (sub) => {
// //     setName(sub.name);
// //     setCategoryId(sub.categoryId);
// //     setEditingId(sub.id);
// //     setShowForm(true); // Show form when editing
// //   };


// //   return (
// //     <div className='subcategorytable-wrapper'> {/* ✅ Applied wrapper class */}
// //       <h2 className='subcategorytable-title'>Subcategories</h2> {/* ✅ Applied title class */}

// //       {/* ➕ Add Button */}
// // <div className="subcategorytable-add-button" onClick={() => {
// //   resetForm();
// //   setShowForm(true);
// // }}>
// //         <FaPlus /> Add Subcategory
// //       </div>

// //       {/* 🧾 Add/Edit Form (Popup) */}
// //       {showForm && (
// //         <div className="subcategorytable-modal-overlay"> {/* ✅ Overlay */}
// //           <div className="subcategorytable-glass-form"> {/* ✅ Glass form */}
// //             <button
// //               className="subcategorytable-close-icon"
// //               onClick={resetForm} // Close button functionality
// //               title="Close"
// //             >
// //               <FaTimes />
// //             </button>

// //             <form onSubmit={(e) => e.preventDefault()} className='subcategorytable-form'> {/* ✅ Form styling */}
// //               <input
// //                 type="text"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 placeholder="Subcategory name"
// //                 required
// //               />
// //               <select
// //                 value={categoryId}
// //                 onChange={(e) => setCategoryId(e.target.value)}
// //                 required
// //               >
// //                 <option value="">Select category</option>
// //                 {categories.map(c => (
// //                   <option key={c.id} value={c.id}>{c.name}</option>
// //                 ))}
// //               </select>
// //               <div className="subcategorytable-form-buttons"> {/* ✅ Buttons styling */}
// //                 <button onClick={handleAddOrUpdate}>
// //                   {editingId ? 'Update' : 'Add'}
// //                 </button>
// //                 <button
// //                   type="button"
// //                   className="cancel-btn"
// //                   onClick={resetForm}
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {/* --- */}
// //       {/* 📋 Subcategory Table */}
// //       <table className="subcategorytable-table"> {/* ✅ Applied table class */}
// //         <thead>
// //           <tr><th>Name</th><th>Category</th><th>Actions</th></tr>
// //         </thead>
// //         <tbody>
// //           {subcategories.map((sub) => (
// //             <tr key={sub.id}>
// //               <td>{sub.name}</td>
// //               {/* Ensure sub.Category exists before accessing .name */}
// //               <td>{sub.Category ? sub.Category.name : 'N/A'}</td>
// //               <td>
// //                 <button onClick={() => handleEdit(sub)} title="Edit"><FaEdit /></button>
// //                 <button onClick={() => handleDelete(sub.id)} title="Delete"><FaTrash /></button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default SubcategoryTable;

// // SubcategoryTable.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './SubcategoryTable.css';
// import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

// // Import react-toastify components
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS!

// const SubcategoryTable = () => {
//   const [subcategories, setSubcategories] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState('');
//   const [categoryId, setCategoryId] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const [showForm, setShowForm] = useState(false); // State to control form visibility

//   const BASE_URL = 'http://localhost:5000/api/subcategories';

//   const fetchData = async () => {
//     try {
//       const [subsRes, catsRes] = await Promise.all([
//         axios.get(BASE_URL),
//         axios.get('http://localhost:5000/api/categories')
//       ]);
//       setSubcategories(subsRes.data);
//       setCategories(catsRes.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       toast.error("Failed to load data. Please try again."); // Error toast
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const resetForm = () => {
//     setName('');
//     setCategoryId('');
//     setEditingId(null);
//     setShowForm(false); // Close the form
//   };

//   const handleAddOrUpdate = async () => {
//     if (!name.trim() || !categoryId) {
//       toast.warn("Please fill in all fields (Subcategory name and Category)."); // Warning toast
//       return;
//     }

//     try {
//       if (editingId) {
//         await axios.put(`${BASE_URL}/${editingId}`, { name, categoryId });
//         toast.success("Subcategory updated successfully!"); // Success toast for update
//       } else {
//         await axios.post(BASE_URL, { name, categoryId });
//         toast.success("Subcategory added successfully!"); // Success toast for add
//       }

//       resetForm();
//       fetchData(); // Refresh data
//     } catch (error) {
//       console.error("Error adding/updating subcategory:", error.response?.data || error.message);
//       toast.error("Failed to save subcategory. Please try again."); // Error toast for failed save
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this subcategory?")) {
//       try {
//         await axios.delete(`${BASE_URL}/${id}`);
//         fetchData();
//         toast.info("Subcategory deleted successfully!"); // Info toast for delete
//       } catch (error) {
//         console.error("Error deleting subcategory:", error.response?.data || error.message);
//         toast.error("Failed to delete subcategory. Please try again."); // Error toast for failed delete
//       }
//     }
//   };

//   const handleEdit = (sub) => {
//     setName(sub.name);
//     setCategoryId(sub.categoryId);
//     setEditingId(sub.id);
//     setShowForm(true); // Show form when editing
//   };

//   return (
//     <div className='subcategorytable-wrapper'>
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

//       <h2 className='subcategorytable-title'>Subcategories</h2>

//       {/* ➕ Add Button */}
//       <div className="subcategorytable-add-button" onClick={() => {
//         resetForm();
//         setShowForm(true);
//       }}>
//         <FaPlus /> Add Subcategory
//       </div>

//       {/* 🧾 Add/Edit Form (Popup) */}
//       {showForm && (
//         <div className="subcategorytable-modal-overlay">
//           <div className="subcategorytable-glass-form">
//             <button
//               className="subcategorytable-close-icon"
//               onClick={resetForm} // Close button functionality
//               title="Close"
//             >
//               <FaTimes />
//             </button>

//             <form onSubmit={(e) => e.preventDefault()} className='subcategorytable-form'>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Subcategory name"
//                 required
//               />
//               <select
//                 value={categoryId}
//                 onChange={(e) => setCategoryId(e.target.value)}
//                 required
//               >
//                 <option value="">Select category</option>
//                 {categories.map(c => (
//                   <option key={c.id} value={c.id}>{c.name}</option>
//                 ))}
//               </select>
//               <div className="subcategorytable-form-buttons">
//                 <button onClick={handleAddOrUpdate}>
//                   {editingId ? 'Update' : 'Add'}
//                 </button>
//                 <button
//                   type="button"
//                   className="cancel-btn"
//                   onClick={resetForm}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* --- */}
//       {/* 📋 Subcategory Table */}
//       <table className="subcategorytable-table">
//         <thead>
//           <tr><th>Name</th><th>Category</th><th>Actions</th></tr>
//         </thead>
//         <tbody>
//           {subcategories.map((sub) => (
//             <tr key={sub.id}>
//               <td>{sub.name}</td>
//               {/* Ensure sub.Category exists before accessing .name */}
//               <td>{sub.Category ? sub.Category.name : 'N/A'}</td>
//               <td>
//                 <button onClick={() => handleEdit(sub)} title="Edit"><FaEdit /></button>
//                 <button onClick={() => handleDelete(sub.id)} title="Delete"><FaTrash /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SubcategoryTable;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SubcategoryTable.css';
import { FaPlus, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubcategoryTable = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null); // For delete popup
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const BASE_URL = 'http://localhost:5000/api/subcategories';

  const fetchData = async () => {
    try {
      const [subsRes, catsRes] = await Promise.all([
        axios.get(BASE_URL),
        axios.get('http://localhost:5000/api/categories')
      ]);
      setSubcategories(subsRes.data);
      setCategories(catsRes.data);
    } catch (error) {
      toast.error("Failed to load data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetForm = () => {
    setName('');
    setCategoryId('');
    setEditingId(null);
    setShowForm(false);
  };

  const handleAddOrUpdate = async () => {
    if (!name.trim() || !categoryId) {
      toast.warn("Please fill in all fields.");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${BASE_URL}/${editingId}`, { name, categoryId });
        toast.success("Subcategory updated successfully!");
      } else {
        await axios.post(BASE_URL, { name, categoryId });
        toast.success("Subcategory added successfully!");
      }

      resetForm();
      fetchData();
    } catch (error) {
      toast.error("Failed to save subcategory.");
    }
  };

  const handleEdit = (sub) => {
    setName(sub.name);
    setCategoryId(sub.categoryId);
    setEditingId(sub.id);
    setShowForm(true);
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`${BASE_URL}/${deleteId}`);
      toast.info("Subcategory deleted successfully!");
      setShowDeletePopup(false);
      setDeleteId(null);
      fetchData();
    } catch (error) {
      toast.error("Failed to delete subcategory.");
    }
  };

  return (
    <div className='subcategorytable-wrapper'>
      <h2 className='subcategorytable-title'>Subcategories</h2>

      <div className="subcategorytable-add-button" onClick={() => {
        resetForm();
        setShowForm(true);
      }}>
        <FaPlus /> Add Subcategory
      </div>

      {showForm && (
        <div className="subcategorytable-modal-overlay">
          <div className="subcategorytable-glass-form">
            <button className="subcategorytable-close-icon" onClick={resetForm}>
              <FaTimes />
            </button>

            <form onSubmit={(e) => e.preventDefault()} className='subcategorytable-form'>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Subcategory name"
                required
              />
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">Select category</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <div className="subcategorytable-form-buttons">
                <button onClick={handleAddOrUpdate}>
                  {editingId ? 'Update' : 'Add'}
                </button>
                <button type="button" className="cancel-btn" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Delete Confirmation Glass Popup */}
      {showDeletePopup && (
        <div className="subcategorydelete-modal-overlay">
          <div className="subcategorydelete-glass-card">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this subcategory?</p>
            <div className="subcategorydelete-buttons">
              <button className="confirm-btn" onClick={handleDeleteConfirmed}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setShowDeletePopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <table className="subcategorytable-table">
        <thead>
          <tr><th>Name</th><th>Category</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {subcategories.map((sub) => (
            <tr key={sub.id}>
              <td>{sub.name}</td>
              <td>{sub.Category ? sub.Category.name : 'N/A'}</td>
              <td>
                <button onClick={() => handleEdit(sub)} title="Edit"><FaEdit /></button>
                <button onClick={() => confirmDelete(sub.id)} title="Delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubcategoryTable;
