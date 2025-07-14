import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import { FaCalendarCheck, FaCut, FaLayerGroup } from 'react-icons/fa';

function Home() {
  const [bookingCount, setBookingCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
const [bookings, setBookings] = useState([]);
const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/booking/bookings')
      .then(res => setBookingCount(res.data.length))
      .catch(err => console.error('Error fetching bookings:', err));

    axios.get('http://localhost:5000/api/makeup-services')
      .then(res => setServiceCount(res.data.length))
      .catch(err => console.error('Error fetching services:', err));

    axios.get('http://localhost:5000/api/services')
      .then(res => setCategoryCount(res.data.length))
      .catch(err => console.error('Error fetching categories:', err));

      axios.get('http://localhost:5000/api/booking/bookings')
  .then(res => {
    setBookingCount(res.data.length);
    setBookings(res.data); // ✅ Store booking data
  })
  .catch(err => console.error('Error fetching bookings:', err));
  axios.get('http://localhost:5000/api/contact')
  .then(res => setContacts(res.data))
  .catch(err => console.error('Error fetching contact messages:', err));


  }, []);

  return (
    <div className="home">
      <div className="bg-overlay"></div>

      <h2>Welcome to the Admin Dashboard</h2>

      <div className="glass-card-wrapper">
        {/* Total Appointments */}
        <div className="glass-card">
          <div className="card-icon green-icon">
            <FaCalendarCheck />
          </div>
          <div className="card-text">
            <span>Total Appointments</span>
            <h3>{bookingCount}</h3>
          </div>
        </div>

        {/* Total Services */}
        <div className="glass-card">
          <div className="card-icon red-icon">
            <FaCut />
          </div>
          <div className="card-text">
            <span>Total Services</span>
            <h3>{serviceCount}</h3>
          </div>
        </div>

        {/* Total Categories */}
        <div className="glass-card">
          <div className="card-icon blue-icon">
            <FaLayerGroup />
          </div>
          <div className="card-text">
            <span>Total Categories</span>
            <h3>{categoryCount}</h3>
          </div>
        </div>
      </div>
      <div className="booking-table-wrapper">
  <h3>Booking Details</h3>
  <div className="booking-table-container">
    <table className="booking-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Address</th>
          <th>Category</th>
          <th>Subcategory</th>
         <th>Date</th>

        </tr>
      </thead>
      <tbody>
        {bookings.map((booking, index) => (
          <tr key={booking.id || index}>
            <td>{booking.id}</td>
            <td>{booking.name}</td>
            <td>{booking.mobile}</td>
            <td>{booking.email}</td>
            <td>{booking.address}</td>
            <td>{booking.category}</td>
            <td>{booking.subcategory}</td>
            <td>{booking.date}</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

<div className="booking-table-wrapper">
  <h3>Contact Messages</h3>
  <div className="booking-table-container">
    <table className="booking-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Message</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id || index}>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.message}</td>
            <td>{new Date(contact.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


    </div>
  );
}

export default Home;
