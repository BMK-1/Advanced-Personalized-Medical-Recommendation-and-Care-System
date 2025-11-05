import React, { useState } from 'react';
import './DiseaseInfo.css';

const DiseaseInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const diseases = {
    flu: {
      name: 'Flu',
      description: 'A common viral infection that can be deadly, especially in high-risk groups.',
      occurrence: 'Caused by influenza viruses, spread through respiratory droplets.',
      whenToSeeDoctor: 'If symptoms are severe or if you are in a high-risk group.',
      dosages: 'Antiviral medications, rest, and hydration.'
    },
    diabetes: {
      name: 'Diabetes',
      description: 'A group of diseases that result in too much sugar in the blood.',
      occurrence: 'Caused by either insufficient insulin production or the body’s inability to use insulin effectively.',
      whenToSeeDoctor: 'Regular check-ups, especially if experiencing symptoms like excessive thirst or frequent urination.',
      dosages: 'Insulin therapy, oral medications, lifestyle changes.'
    },
    hypertension: {
      name: 'Hypertension',
      description: 'A condition in which the force of the blood against the artery walls is too high.',
      occurrence: 'Often develops over many years and can be caused by unhealthy lifestyle choices.',
      whenToSeeDoctor: 'Regular monitoring, especially if experiencing severe headaches or shortness of breath.',
      dosages: 'Antihypertensive medications, lifestyle changes.'
    },
    asthma: {
      name: 'Asthma',
      description: 'A condition in which your airways narrow and swell and may produce extra mucus.',
      occurrence: 'Triggered by allergens, exercise, cold air, or stress.',
      whenToSeeDoctor: 'If experiencing frequent asthma attacks or if symptoms worsen.',
      dosages: 'Inhalers, corticosteroids, and avoiding triggers.'
    },
    covid19: {
      name: 'COVID-19',
      description: 'A contagious disease caused by the SARS-CoV-2 virus.',
      occurrence: 'Spread through respiratory droplets and contact with contaminated surfaces.',
      whenToSeeDoctor: 'If experiencing severe symptoms like difficulty breathing or persistent chest pain.',
      dosages: 'Supportive care, antiviral medications, and vaccination.'
    },
    tuberculosis: {
      name: 'Tuberculosis',
      description: 'A potentially serious infectious disease that mainly affects the lungs.',
      occurrence: 'Caused by Mycobacterium tuberculosis, spread through airborne particles.',
      whenToSeeDoctor: 'If experiencing a persistent cough, weight loss, or night sweats.',
      dosages: 'Antibiotic treatment for several months.'
    },
    malaria: {
      name: 'Malaria',
      description: 'A disease caused by a plasmodium parasite, transmitted by the bite of infected mosquitoes.',
      occurrence: 'Common in tropical and subtropical regions.',
      whenToSeeDoctor: 'If experiencing fever, chills, and flu-like symptoms after traveling to a malaria-prone area.',
      dosages: 'Antimalarial medications.'
    },
    hepatitis: {
      name: 'Hepatitis',
      description: 'Inflammation of the liver, often caused by viral infections.',
      occurrence: 'Spread through contaminated food, water, or contact with infected body fluids.',
      whenToSeeDoctor: 'If experiencing jaundice, abdominal pain, or dark urine.',
      dosages: 'Antiviral medications, rest, and avoiding alcohol.'
    },
    pneumonia: {
      name: 'Pneumonia',
      description: 'An infection that inflames the air sacs in one or both lungs.',
      occurrence: 'Caused by bacteria, viruses, or fungi.',
      whenToSeeDoctor: 'If experiencing chest pain, difficulty breathing, or persistent cough.',
      dosages: 'Antibiotics, antiviral medications, and supportive care.'
    },
    arthritis: {
      name: 'Arthritis',
      description: 'Inflammation of one or more joints, causing pain and stiffness.',
      occurrence: 'Caused by wear and tear, infections, or autoimmune conditions.',
      whenToSeeDoctor: 'If experiencing joint pain, swelling, or decreased range of motion.',
      dosages: 'Pain relievers, anti-inflammatory drugs, and physical therapy.'
    },
    migraine: {
      name: 'Migraine',
      description: 'A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.',
      occurrence: 'Triggered by stress, hormonal changes, certain foods, or sensory stimuli.',
      whenToSeeDoctor: 'If experiencing frequent or severe migraines.',
      dosages: 'Pain relievers, triptans, and preventive medications.'
    },
    eczema: {
      name: 'Eczema',
      description: 'A condition that makes your skin red and itchy.',
      occurrence: 'Triggered by allergens, irritants, or stress.',
      whenToSeeDoctor: 'If experiencing severe itching, redness, or skin infections.',
      dosages: 'Moisturizers, corticosteroid creams, and avoiding triggers.'
    },
    depression: {
      name: 'Depression',
      description: 'A mood disorder that causes a persistent feeling of sadness and loss of interest.',
      occurrence: 'Caused by a combination of genetic, biological, environmental, and psychological factors.',
      whenToSeeDoctor: 'If experiencing persistent sadness, loss of interest, or thoughts of self-harm.',
      dosages: 'Antidepressants, psychotherapy, and lifestyle changes.'
    },
    anxiety: {
      name: 'Anxiety',
      description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one’s daily activities.',
      occurrence: 'Triggered by stress, trauma, or underlying health conditions.',
      whenToSeeDoctor: 'If experiencing excessive worry, restlessness, or panic attacks.',
      dosages: 'Anti-anxiety medications, psychotherapy, and relaxation techniques.'
    },
    obesity: {
      name: 'Obesity',
      description: 'A complex disease involving an excessive amount of body fat.',
      occurrence: 'Caused by a combination of genetic, behavioral, and environmental factors.',
      whenToSeeDoctor: 'If experiencing health problems related to obesity, such as diabetes or heart disease.',
      dosages: 'Lifestyle changes, medications, and in some cases, surgery.'
    },
    // Add more diseases here
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleDiseaseClick = (diseaseKey) => {
    setSelectedDisease(diseases[diseaseKey]);
    setShowRecommendations(false);
  };

  const handleShowRecommendations = () => {
    setShowRecommendations(true);
  };

  const filteredDiseases = Object.keys(diseases).filter(diseaseKey =>
    diseases[diseaseKey].name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="disease-info-container">
      <h1>Disease Information</h1>
      <p>Learn about various diseases and their treatments.</p>
      <input
        type="text"
        placeholder="Search for a disease..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="disease-list">
        {filteredDiseases.map((diseaseKey) => (
          <div
            key={diseaseKey}
            className="disease-item"
            onClick={() => handleDiseaseClick(diseaseKey)}
          >
            {diseases[diseaseKey].name}
          </div>
        ))}
      </div>
      {selectedDisease && (
        <div className="disease-details">
          <h2>{selectedDisease.name}</h2>
          <p><strong>Description:</strong> {selectedDisease.description}</p>
          <p><strong>How it occurs:</strong> {selectedDisease.occurrence}</p>
          <p><strong>When to reach a doctor:</strong> {selectedDisease.whenToSeeDoctor}</p>
          <p><strong>Medical dosages:</strong> {selectedDisease.dosages}</p>
          <button onClick={handleShowRecommendations} className="recommendations-button">
            Show Treatment Recommendations
          </button>
          {showRecommendations && <TreatmentRecommendations disease={selectedDisease} />}
        </div>
      )}
    </div>
  );
};

export default DiseaseInfo;
