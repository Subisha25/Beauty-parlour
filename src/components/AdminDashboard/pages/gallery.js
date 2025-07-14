import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gallery.css';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

function DashboardGallery() {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [newDescription, setNewDescription] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios.get('http://localhost:5000/api/gallery')
      .then(res => setImages(res.data))
      .catch(err => console.error('Error fetching gallery images:', err));
  };

  const handleEdit = (id) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.onchange = async () => {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('image_url', file);

      try {
        await axios.put(`http://localhost:5000/api/gallery/${id}`, formData);
        fetchImages();
      } catch (err) {
        console.error('Error updating image:', err);
      }
    };
  };

  const handleAddImage = async () => {
    if (!newImage) return alert("Please select an image");

    const formData = new FormData();
    formData.append('image_url', newImage);
    formData.append('description', newDescription);

    try {
      await axios.post('http://localhost:5000/api/gallery', formData);
      fetchImages();
      setShowModal(false);
      setNewImage(null);
      setNewDescription('');
    } catch (err) {
      console.error('Error adding image:', err);
    }
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/gallery/${deleteConfirm.id}`);
      fetchImages();
      setDeleteConfirm({ show: false, id: null });
    } catch (err) {
      console.error('Error deleting image:', err);
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <button className="add-gallery-btn" onClick={() => setShowModal(true)}>
          <FaPlus /> Add Gallery
        </button>
        <h2 className="gallery-title">Gallery</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card glass-card" key={index}>
            <img src={`http://localhost:5000${img.image || img.image_url}`} alt="gallery" />
            <div className="gallery-overlay">
              <FaEdit className="icon edit-icon" title="Edit" onClick={() => handleEdit(img.id)} />
              <FaTrash className="icon delete-icon" title="Delete" onClick={() => setDeleteConfirm({ show: true, id: img.id })} />
            </div>
          </div>
        ))}
      </div>

      {/* Add Image Modal */}
      {showModal && (
        <div className="gallery-popup-overlay">
          <div className="gallery-popup-content glass-card">
            <h3>Add New Gallery Image</h3>
            <input type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} />
            <textarea
              placeholder="Enter description (optional)"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
            <div className="gallery-popup-buttons">
              <button onClick={handleAddImage}>Save</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="gallery-popup-overlay">
          <div className="gallery-popup-contents glass-card">
            <h3>Are you sure you want to delete this image?</h3>
            <div className="gallery-popup-buttons">
              <button onClick={confirmDelete}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setDeleteConfirm({ show: false, id: null })}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardGallery;
