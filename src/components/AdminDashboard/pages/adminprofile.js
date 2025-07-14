import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './adminprofile.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function AdminProfile() {
  const [profile, setProfile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    shopLocation: '',
    profileImage: null,
  });

  const [adminLogin, setAdminLogin] = useState({
    username: '',
    password: '',
    id: null,
  });

  const fetchProfile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin-profiles');
      if (res.data.length > 0) {
        setProfile(res.data[0]);
        setFormData(res.data[0]);
      }

      const loginRes = await axios.get('http://localhost:5000/api/admin/login');
      if (loginRes.data.length > 0) {
        setAdminLogin(loginRes.data[0]);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, profileImage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = new FormData();
      updatedData.append('name', formData.name);
      updatedData.append('email', formData.email);
      updatedData.append('mobile', formData.mobile);
      updatedData.append('shopLocation', formData.shopLocation);
      if (formData.profileImage instanceof File) {
        updatedData.append('profileImage', formData.profileImage);
      }

      await axios.put(`http://localhost:5000/api/admin-profiles/${profile.id}`, updatedData);

      setSuccessMessage('Profile updated successfully!');
      fetchProfile();
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setAdminLogin(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admin/login/${adminLogin.id}`, {
        username: adminLogin.username,
        password: adminLogin.password,
      });

      setSuccessMessage('Login credentials updated!');
      setShowPopup(false);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error updating credentials:', err);
    }
  };

  return (
    <div className="admin-profile-wrapper">
      {successMessage && <div className="success-toast">{successMessage}</div>}

      <h2 className="admin-profile-title">Admin Profile</h2>

      <form className="admin-profile-form glass-card" onSubmit={handleSubmit}>
        <div className="profile-image-preview">
          <label htmlFor="profileImage">
            <img
              src={
                formData.profileImage instanceof File
                  ? URL.createObjectURL(formData.profileImage)
                  : `http://localhost:5000/uploads/${formData.profileImage}`
              }
              alt="Profile"
            />
          </label>
          <input
            id="profileImage"
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="input-row">
          <div className="input-field">
            <label>Name</label>
            <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input type="email" name="email" value={formData.email || ''} onChange={handleChange} />
          </div>
        </div>

        <div className="input-row">
          <div className="input-field">
            <label>Mobile</label>
            <input type="text" name="mobile" value={formData.mobile || ''} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Shop Location</label>
            <input type="text" name="shopLocation" value={formData.shopLocation || ''} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="save-btn">Save Profile</button>
        <p className="change-login" onClick={() => setShowPopup(true)}>Change your username or password?</p>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form glass-card">
            <h3>Update Login</h3>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="username"
                value={adminLogin.username}
                onChange={handleLoginChange}
                placeholder="Username"
              />
            <div className="password-field-wrapper">
  <input
    type={showPassword ? 'text' : 'password'}
    name="password"
    value={adminLogin.password}
    onChange={handleLoginChange}
    placeholder="Password"
  />
  <span
    className="eye-icon"
    onClick={() => setShowPassword(prev => !prev)}
  >
    {showPassword ? <FaEye /> : <FaEyeSlash /> }
  </span>
</div>



              <div className="popup-buttons">
                <button type="submit">Update</button>
                <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProfile;
