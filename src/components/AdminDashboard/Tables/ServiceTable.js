import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  imagePreview: null, // add this
});


  const [editingId, setEditingId] = useState(null);

  const BASE = 'http://localhost:5000/api';
  const IMAGE_BASE_URL = 'http://localhost:5000/uploads/'; // ✅ Assuming your backend serves images from this path

  const fetchServices = async () => {
    const res = await axios.get(`${BASE}/makeup-services`);
    setServices(res.data);
  };

  const fetchDropdowns = async () => {
    const [catRes, subRes] = await Promise.all([
      axios.get(`${BASE}/categories`),
      axios.get(`${BASE}/subcategories`),
    ]);
    setCategories(catRes.data);
    setSubcategories(subRes.data);
  };

  useEffect(() => {
    fetchServices();
    fetchDropdowns();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === 'advantages') {
        // Ensure advantages are stringified only if they are not already a string
        formData.append(key, JSON.stringify(value.split(',').map(item => item.trim())));
      } else if (key === 'image' && value) {
        formData.append(key, value);
      } else if (key !== 'image') { // Append other form fields except image if it's null
        formData.append(key, value);
      }
    });

    try {
      if (editingId) {
        await axios.put(`${BASE}/makeup-services/${editingId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await axios.post(`${BASE}/makeup-services`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      // Reset form and editing state
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
      });
      setEditingId(null);
      fetchServices();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an alert to the user)
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE}/makeup-services/${id}`);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
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
  };

  return (
    <div>
      <h2>Makeup Services</h2>

      {/* --- */}
      {/* 🧾 Add/Edit Form */}
      <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '20px' }}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
        <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" />
        <input name="discount" value={form.discount} onChange={handleChange} placeholder="Discount" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
        <input name="oldPrice" value={form.oldPrice} onChange={handleChange} placeholder="Old Price" />
        <input name="advantages" value={form.advantages} onChange={handleChange} placeholder="Advantages (comma-separated)" />

        {/* <select name="categoryId" value={form.categoryId} onChange={handleChange}>
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select> */}

        <select name="categoryId" value={form.categoryId} onChange={handleChange}>
  <option value="">Select Category</option>
  {categories.map((c) => (
    <option key={c.id} value={c.id}>
      {c.name}
    </option>
  ))}
</select>


        <select name="subcategoryId" value={form.subcategoryId} onChange={handleChange}>
          <option value="">Select Subcategory</option>
          {subcategories.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

<input type="file" name="image" onChange={handleChange} />
{form.imagePreview && (
  <img
    src={form.imagePreview}
    alt="Preview"
    style={{ width: '80px', marginTop: '10px' }}
  />
)}

        <button onClick={handleSubmit}>{editingId ? 'Update' : 'Add'}</button>
        {editingId && (
          <button onClick={() => {
            setEditingId(null);
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
            });
          }}>Cancel</button>
        )}
      </form>

      {/* --- */}
      {/* 📋 Service Table */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
            <th>Discount</th>
            <th>Price</th>
            <th>Old Price</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Advantages</th>
            <th>Image</th> {/* ✅ Added Image column header */}
            <th>Actions</th>
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
            return JSON.parse(s.advantages);
          } catch (e) {
            return s.advantages
              .replace(/\[|\]|"|'/g, '')
              .split(/\r?\n|,/)
              .map((a) => a.trim())
              .filter(Boolean);
          }
        })()
    ).map((adv, idx) => (
      <li key={idx}>
        {/* <span style={{ color: 'green', marginRight: '5px' }}>✔</span> */}
        {adv}
      </li>
    ))}
  </ul>
</td>

              <td>
                {s.image && ( // ✅ Conditionally render image if image exists
                  <img
                    src={`${IMAGE_BASE_URL}${s.image}`}
                    alt={s.title}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(s)}>Edit</button>
                <button onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;