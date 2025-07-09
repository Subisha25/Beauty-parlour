// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../Tables/Table.css';
// import SubcategoryTable from './SubcategoryTable';
// import ServiceTable from './ServiceTable';

// const CategoryTable = () => {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [editingImage, setEditingImage] = useState('');

//   const BASE_URL = 'http://localhost:5000/api/categories';

//   // 🔃 Get all categories
//   const fetchCategories = async () => {
//     const res = await axios.get(BASE_URL);
//     setCategories(res.data);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // ➕ Add or ✏️ Update category
//   const handleAddOrUpdate = async () => {
//     const formData = new FormData();
//     formData.append('name', name);
//     if (image) formData.append('image', image);

//     if (editingId) {
//       // PUT: Update category
//       await axios.put(`${BASE_URL}/${editingId}`, formData);
//     } else {
//       // POST: Create new category
//       await axios.post(BASE_URL, formData);
//     }

//     setName('');
//     setImage(null);
//     setEditingId(null);
//     setEditingImage('');
//     fetchCategories();
//   };

//   // 🗑️ Delete category
//   const handleDelete = async (id) => {
//     await axios.delete(`${BASE_URL}/${id}`);
//     fetchCategories();
//   };

//   // ✏️ Start editing
//   const startEdit = (cat) => {
//     setName(cat.name);
//     setEditingId(cat.id);
//     setEditingImage(cat.image);
//   };

//   return (
//     <div className='table1'>
//       <h2>Categories</h2>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           value={name}
//           placeholder="Category name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//         <button onClick={handleAddOrUpdate}>
//           {editingId ? 'Update' : 'Add'}
//         </button>
//         {editingId && (
//           <button
//             onClick={() => {
//               setEditingId(null);
//               setName('');
//               setImage(null);
//               setEditingImage('');
//             }}
//             style={{ marginLeft: '10px', backgroundColor: 'gray' }}
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <table>
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
//                     src={`http://localhost:5000/uploads/${cat.image}`}
//                     alt={cat.name}
//                     width="60"
//                   />
//                 ) : (
//                   'No image'
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => startEdit(cat)}>Edit</button>
//                 <button onClick={() => handleDelete(cat.id)}>Delete</button>
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
import '../Tables/CategoryTable.css'; // Make sure this path is correct
import SubcategoryTable from './SubcategoryTable';
import ServiceTable from './ServiceTable';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editingImage, setEditingImage] = useState('');
  const [showForm, setShowForm] = useState(false); // 👈 Show/Hide glass form

  const BASE_URL = 'http://localhost:5000/api/categories';
  const IMAGE_UPLOAD_URL = 'http://localhost:5000/uploads/'; // Adjust if your image serving path is different

  const fetchCategories = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Handle error gracefully, e.g., show a message to the user
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddOrUpdate = async () => {
    // Basic validation
    if (!name.trim()) {
      alert("Category name cannot be empty.");
      return;
    }
    if (!editingId && !image) {
        alert("Please select an image for the new category.");
        return;
    }


    const formData = new FormData();
    formData.append('name', name);
    if (image) { // Only append image if a new one is selected
      formData.append('image', image);
    }

    try {
      if (editingId) {
        await axios.put(`${BASE_URL}/${editingId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await axios.post(BASE_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      // Reset form and close it
      resetForm();
      fetchCategories(); // Refresh the list
    } catch (error) {
      console.error("Error adding/updating category:", error);
      alert("Failed to save category. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`${BASE_URL}/${id}`);
        fetchCategories();
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Failed to delete category. Please try again.");
      }
    }
  };

  const startEdit = (cat) => {
    setName(cat.name);
    setEditingId(cat.id);
    setEditingImage(cat.image); // Store existing image name if any
    setShowForm(true); // Show form when editing
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

      {/* ➕ Add Button */}
     <div
  className="categorytable-add-button"
  onClick={() => {
    resetForm(); // reset the fields first
    setShowForm(true); // then show the form
  }}
>
  <FaPlus /> Add Category
</div>


      {/* Glass Form (Popup) */}
     {showForm && (
  <div className="categorytable-modal-overlay">
    <div className="categorytable-glass-form">

      {/* ❌ Close icon */}
      <button
        className="categorytable-close-icon"
        onClick={resetForm}
        title="Close"
      >
        &times;
      </button>

      <form onSubmit={(e) => e.preventDefault()} className='categorytable-form'>
        <input
          type="text"
          value={name}
          placeholder="Category name"
          onChange={(e) => setName(e.target.value)}
          required
        />
       <input
  type="file"
  onChange={(e) => setImage(e.target.files[0])}
/>

{/* Show preview only when adding (not editing) */}
{!editingId && image && (
  <div style={{ marginTop: '10px' }}>
    <img
      src={URL.createObjectURL(image)}
      alt="Preview"
      width="80"
      style={{ borderRadius: '8px' }}
    />
  </div>
)}

{/* Show existing image only when editing */}
{editingId && editingImage && (
  <p style={{ color: 'white', fontSize: '0.9em', margin: '-5px 0 5px 0' }}>
    
   <img
  src={`${IMAGE_UPLOAD_URL}${editingImage}`}
  alt="Current"
  width="100" // 👈 Increased from 30 to 100
  style={{
    verticalAlign: 'middle',
    marginLeft: '10px',
    borderRadius: '8px', // more rounded
    height: 'auto', // maintain aspect ratio
  }}
/>

    {/* <span style={{ marginLeft: '5px' }}>{editingImage}</span> */}
  </p>
)}


        <div className="categorytable-form-buttons">
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
                  <img
                    src={`${IMAGE_UPLOAD_URL}${cat.image}`}
                    alt={cat.name}
                    width="60"
                  />
                ) : 'No image'}
              </td>
              <td>
                <button onClick={() => startEdit(cat)} title="Edit"><FaEdit /></button>
                <button onClick={() => handleDelete(cat.id)} title="Delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Keep SubcategoryTable and ServiceTable if they are part of this page */}
      <SubcategoryTable />
      <ServiceTable />
    </div>
  );
};

export default CategoryTable;