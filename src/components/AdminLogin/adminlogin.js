import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username.trim()) validationErrors.username = 'Username is required';
    if (!password.trim()) validationErrors.password = 'Password is required';

    setErrors(validationErrors);
    setApiError('');

    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post('http://localhost:5000/api/admin/login', {
          username,
          password,
        });

        if (res.data.success) {
          // ✅ Navigate on successful login
          navigate('/dashboardlayout');
        }
      } catch (err) {
        // ❌ Show error on invalid credentials
        if (err.response && err.response.status === 401) {
          setApiError('Invalid username or password');
        } else {
          setApiError('Something went wrong. Try again later.');
        }
      }
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon">👤</span>
          </div>
          {errors.username && <p className="error">{errors.username}</p>}

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon">🔒</span>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          {apiError && <p className="error">{apiError}</p>}

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
