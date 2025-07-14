// src/components/AppointmentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./appoinmentlist.css"; // Make sure this file matches your file name exactly

function AppointmentList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/booking/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.error('Error fetching bookings:', err));
  }, []);

  return (
    <div className="appointment-wrapper">
      <h3 className="appointment-title">Appointment List</h3>
      <div className="appointment-table-container">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Category</th>
              <th>Subcategory</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentList;
