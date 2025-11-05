import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SymptomChecker from './components/SymptomChecker/SymptomChecker';
import DiseaseInfo from './components/DiseaseInfo/DiseaseInfo';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AppointmentManager from './components/AppointmentManager/AppointmentManager';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/disease-info" element={<DiseaseInfo />} />
          <Route path="/appointment-manager" element={<AppointmentManager />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
