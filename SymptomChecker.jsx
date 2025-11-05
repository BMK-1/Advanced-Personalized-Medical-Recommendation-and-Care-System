import React, { useState } from 'react';
import './SymptomChecker.css';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [invalidSymptoms, setInvalidSymptoms] = useState([]);

  const symptomRecommendations = {
    fever: ['Drink plenty of fluids', 'Rest and avoid strenuous activities', 'Take over-the-counter fever reducers'],
    cough: ['Stay hydrated', 'Use a humidifier', 'Take cough suppressants'],
    headache: ['Rest in a quiet, dark room', 'Apply a cold or warm compress', 'Take over-the-counter pain relievers'],
    sorethroat: ['Gargle with warm salt water', 'Drink warm liquids', 'Use throat lozenges'],
    fatigue: ['Get adequate sleep', 'Eat a balanced diet', 'Exercise regularly'],
    nausea: ['Eat small, frequent meals', 'Avoid strong odors', 'Stay hydrated'],
    dizziness: ['Sit or lie down immediately', 'Drink water', 'Avoid sudden movements'],
    chestpain: ['Rest', 'Take prescribed medication', 'Seek immediate medical attention if severe'],
    shortnessOfBreath: ['Sit upright', 'Use prescribed inhalers', 'Seek medical attention if severe'],
    backPain: ['Apply heat or cold packs', 'Take over-the-counter pain relievers', 'Maintain good posture'],
    jointPain: ['Rest the affected joint', 'Apply ice packs', 'Take anti-inflammatory medications'],
    rash: ['Keep the area clean and dry', 'Apply anti-itch creams', 'Avoid scratching'],
    abdominalpain: ['Rest', 'Avoid heavy meals', 'Take antacids if needed'],
    diarrhea: ['Stay hydrated', 'Eat bland foods', 'Avoid dairy products'],
    constipation: ['Increase fiber intake', 'Drink plenty of water', 'Exercise regularly']
  };

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const symptomList = symptoms.split(',').map(symptom => symptom.trim().toLowerCase());
    const validRecommendations = [];
    const invalidSymptomList = [];

    symptomList.forEach(symptom => {
      if (symptomRecommendations[symptom]) {
        validRecommendations.push(...symptomRecommendations[symptom]);
      } else {
        invalidSymptomList.push(symptom);
      }
    });

    setRecommendations(validRecommendations);
    setInvalidSymptoms(invalidSymptomList);
  };

  return (
    <div className="symptom-checker-container">
      <h1>Symptom Checker</h1>
      <p>Enter your symptoms to get recommendations. Separate multiple symptoms with a comma.</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={symptoms}
          onChange={handleInputChange}
          placeholder="Describe your symptoms here..."
          className="symptom-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {recommendations.length > 0 && (
        <div className="recommendations">
          <h2>Recommendations:</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
      {invalidSymptoms.length > 0 && (
        <div className="invalid-symptoms">
          <h2>Invalid Symptoms:</h2>
          <ul>
            {invalidSymptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
