import React, { useEffect, useState } from 'react';
import './OurServiceList.css';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const OurServiceList = () => {
  const [services, setServices] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editImage, setEditImage] = useState(null);

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newTitle);
    formData.append('image', newImage);

    try {
      await axios.post('http://localhost:5000/api/services', formData);
      fetchServices();
      setNewTitle('');
      setNewImage(null);
      setShowForm(false);
      toast.success('Service added successfully!');
    } catch (error) {
      console.error('Error adding service:', error);
      toast.error('Failed to add service');
    }
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', editTitle);
    if (editImage) {
      formData.append('image', editImage);
    }

    try {
      await axios.put(`http://localhost:5000/api/services/${editingId}`, formData);
      fetchServices();
      setEditingId(null);
      setEditTitle('');
      setEditImage(null);
      toast.success('Service updated successfully!');
    } catch (error) {
      console.error('Error updating service:', error);
      toast.error('Failed to update service');
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/services/${id}`);
      fetchServices();
      toast.success('Service deleted successfully!');
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('Failed to delete service');
    }
  };

  return (
    <div className="ourserviceslist-list-wrapper">
      <h2 className="ourserviceslist-heading">Our Services</h2>

      <div className="ourserviceslist-topbar">
        <button
          className="ourserviceslist-add-button"
          onClick={() => {
            setShowForm(true);
            setEditingId(null);
          }}
        >
          + Add Service
        </button>
      </div>

      <div className="ourserviceslist-grid">
        {services.map((service) => (
          <div className="ourserviceslist-card" key={service.id}>
            <div className="ourserviceslist-image-box">
              <img
                src={`http://localhost:5000/uploads/${service.image}`}
                alt={service.title}
                className="ourserviceslist-image"
              />
            </div>
            <div className="ourserviceslist-content">
              <div className="ourserviceslist-title">{service.title}</div>
              <div className="ourserviceslist-icons">
                <FaEdit
                  className="icon-edit"
                  onClick={() => {
                    setEditingId(service.id);
                    setEditTitle(service.title);
                    setEditImage(null);
                    setShowForm(false);
                  }}
                />
                <FaTrash
                  className="icon-delete"
                  onClick={() => {
                    setShowDeletePopup(true);
                    setServiceToDelete(service.id);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Form Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="modal-close" onClick={() => setShowForm(false)}>&times;</span>
            <h3>Add Service</h3>
            <form onSubmit={handleAddService}>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Title"
                required
              />
              <input
                type="file"
                onChange={(e) => setNewImage(e.target.files[0])}
                required
              />
              <div className="form-buttons">
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Form Modal */}
      {editingId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="modal-close" onClick={() => setEditingId(null)}>&times;</span>
            <h3>Edit Service</h3>
            <form onSubmit={handleUpdateService}>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Title"
                required
              />
             <input
  type="file"
  onChange={(e) => setEditImage(e.target.files[0])}
/>

{/* Preview selected image */}
{editImage && (
  <img
    src={URL.createObjectURL(editImage)}
    alt="New Preview"
    style={{ width: '100px', marginTop: '10px', borderRadius: '8px' }}
  />
)}

{!editImage && (
  <img
    src={`http://localhost:5000/uploads/${services.find(s => s.id === editingId)?.image}`}
    alt="Old Image"
    style={{ width: '100px', marginTop: '10px', borderRadius: '8px' }}
  />
)}

              <div className="form-buttons">
                <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeletePopup && (
        <div className="delete-modal-overlay">
          <div className="delete-modal-content glass-card">
            <span className="modal-close" onClick={() => setShowDeletePopup(false)}>&times;</span>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this service?</p>
            <div className="form-buttons">
              <button type="button" onClick={() => setShowDeletePopup(false)}>Cancel</button>
              <button
                type="button"
                onClick={() => {
                  handleDeleteService(serviceToDelete);
                  setShowDeletePopup(false);
                  setServiceToDelete(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServiceList;
