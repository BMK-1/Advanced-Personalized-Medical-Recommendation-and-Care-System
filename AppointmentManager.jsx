import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AppointmentManager.css';

const AppointmentManager = () => {
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });

  const [newAppointment, setNewAppointment] = useState({
    id: '',
    userName: '',
    date: '',
    time: '',
    details: ''
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    if (newAppointment.userName && newAppointment.date && newAppointment.time) {
      setAppointments([
        ...appointments,
        { ...newAppointment, id: appointments.length + 1 }
      ]);
      setNewAppointment({
        id: '',
        userName: '',
        date: '',
        time: '',
        details: ''
      });
    }
  };

  const handleDeleteAppointment = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointment-manager-container">
      <h1>Appointment Manager</h1>
      <form className="appointment-form" onSubmit={handleAddAppointment}>
        <h2>Add New Appointment</h2>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={newAppointment.userName}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="time"
          value={newAppointment.time}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="details"
          placeholder="Details"
          value={newAppointment.details}
          onChange={handleInputChange}
        />
        <button type="submit">Add Appointment</button>
      </form>

      {/* Display list of appointments */}
      <div className="appointment-list">
        <h2>Scheduled Appointments</h2>
        {appointments.length === 0 ? (
          <p>No appointments scheduled.</p>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-item">
              <h3>{appointment.userName}</h3>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Details: {appointment.details}</p>
              <button className="delete-button" onClick={() => handleDeleteAppointment(appointment.id)}>
                Delete Appointment
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppointmentManager;
