import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Medical Recommendation System</h1>
      <p>Get personalized medical recommendations based on your symptoms.</p>
      <div className="button-container">
        <Link to="/symptom-checker" className="button">Symptom Checker</Link>
        <Link to="/disease-info" className="button">Disease Information</Link>
        <Link to="/admin-dashboard" className="button">Admin Dashboard</Link>
        <Link to="/appointment-manager" className='button'>Manage Appointments</Link>
      </div>
    </div>
  );
};

export default Home;
