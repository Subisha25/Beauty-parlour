import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubcategoryTable = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [editingId, setEditingId] = useState(null);

  const BASE_URL = 'http://localhost:5000/api/subcategories';

  const fetchData = async () => {
    const [subsRes, catsRes] = await Promise.all([
      axios.get(BASE_URL),
      axios.get('http://localhost:5000/api/categories')
    ]);
    setSubcategories(subsRes.data);
    setCategories(catsRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddOrUpdate = async () => {
    if (!name || !categoryId) {
      alert("Please fill in all fields");
      return;
    }

    if (editingId) {
      await axios.put(`${BASE_URL}/${editingId}`, { name, categoryId });
      setEditingId(null);
    } else {
      await axios.post(BASE_URL, { name, categoryId });
    }

    setName('');
    setCategoryId('');
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    fetchData();
  };

  const handleEdit = (sub) => {
    setName(sub.name);
    setCategoryId(sub.categoryId);
    setEditingId(sub.id);
  };

  const cancelEdit = () => {
    setName('');
    setCategoryId('');
    setEditingId(null);
  };

  return (
    <div>
      <h2>Subcategories</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Subcategory name"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select category</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <button onClick={handleAddOrUpdate}>
          {editingId ? 'Update' : 'Add'}
        </button>
        {editingId && (
          <button onClick={cancelEdit} style={{ marginLeft: '10px', backgroundColor: 'gray' }}>
            Cancel
          </button>
        )}
      </form>

      <table>
        <thead>
          <tr><th>Name</th><th>Category</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {subcategories.map((sub) => (
            <tr key={sub.id}>
              <td>{sub.name}</td>
              <td>{sub.Category?.name}</td>
              <td>
                <button onClick={() => handleEdit(sub)}>Edit</button>
                <button onClick={() => handleDelete(sub.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubcategoryTable;
