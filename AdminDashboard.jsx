import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    email: '',
    age: '',
    sex: '',
    allergies: '',
    diseases: '',
    familyMembers: ''
  });

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({
        id: '',
        name: '',
        email: '',
        age: '',
        sex: '',
        allergies: '',
        diseases: '',
        familyMembers: ''
      });
    }
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleShowHealthTips = (user) => {
    setSelectedUser(user);
  };

  // Health tips based on diseases
  const renderHealthTips = (user) => {
    const diseaseBasedTips = {
      diabetes: [
        'Monitor blood sugar levels regularly.',
        'Maintain a balanced diet with low sugar intake.',
        'Exercise regularly to help manage blood sugar.'
      ],
      asthma: [
        'Avoid exposure to allergens such as pollen and dust.',
        'Use prescribed inhalers as directed by your doctor.',
        'Stay indoors during high pollen seasons.'
      ],
      hypertension: [
        'Reduce sodium intake by limiting processed foods.',
        'Maintain a healthy weight and exercise regularly.',
        'Monitor blood pressure regularly.'
      ],
      arthritis: [
        'Engage in low-impact exercises like swimming or walking.',
        'Maintain a healthy weight to reduce joint pressure.',
        'Apply heat or cold to sore joints for relief.'
      ],
      depression: [
        'Seek professional help and consider therapy or counseling.',
        'Stay connected with family and friends for emotional support.',
        'Engage in physical activity and hobbies that boost mood.'
      ],
      anemia: [
        'Increase iron-rich foods in your diet (e.g., spinach, red meat).',
        'Take iron supplements if recommended by your doctor.',
        'Avoid caffeine around meals to improve iron absorption.'
      ],
      allergies: [
        'Avoid known allergens and triggers like pollen or pet dander.',
        'Use antihistamines to manage symptoms.',
        'Keep windows closed during high pollen seasons.'
      ],
      heartDisease: [
        'Maintain a healthy diet low in saturated fats and cholesterol.',
        'Exercise regularly to strengthen the heart.',
        'Avoid smoking and manage stress levels.'
      ],
      obesity: [
        'Incorporate regular physical activity into your daily routine.',
        'Focus on portion control and a balanced diet.',
        'Avoid sugary and high-calorie foods.'
      ],
      migraine: [
        'Avoid known migraine triggers like bright lights or strong odors.',
        'Maintain a regular sleep schedule.',
        'Stay hydrated and avoid skipping meals.'
      ],
      osteoporosis: [
        'Increase calcium and vitamin D intake through diet or supplements.',
        'Engage in weight-bearing exercises like walking or jogging.',
        'Avoid smoking and limit alcohol consumption.'
      ],
      eczema: [
        'Moisturize skin regularly, especially after bathing.',
        'Avoid harsh soaps and hot water when washing.',
        'Wear loose, breathable clothing to reduce irritation.'
      ],
      cancer: [
        'Follow up with regular medical checkups and screenings.',
        'Maintain a healthy lifestyle with balanced nutrition.',
        'Avoid smoking and excessive alcohol consumption.'
      ],
      chronicKidneyDisease: [
        'Limit salt and potassium intake in your diet.',
        'Stay hydrated but avoid excessive fluid intake.',
        'Follow your doctor’s advice on managing blood pressure and diabetes.'
      ],
      thyroidDisorders: [
        'Follow prescribed medication for managing thyroid levels.',
        'Include iodine-rich foods in your diet (if hypothyroid).',
        'Limit iodine intake (if hyperthyroid) as per doctor’s advice.'
      ]
    };

    const userDiseases = user.diseases.toLowerCase().split(',').map(disease => disease.trim());
    const tips = userDiseases.reduce((acc, disease) => {
      if (diseaseBasedTips[disease]) {
        acc.push(...diseaseBasedTips[disease]);
      }
      return acc;
    }, []);

    return tips.length > 0 ? tips : ['No specific health tips available for this user.'];
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Manage the system and view user data.</p>

      {/* Form for adding new users */}
      <form className="user-form" onSubmit={handleAddUser}>
        <h2>Add New User</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newUser.age}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="sex"
          placeholder="Sex (Male/Female)"
          value={newUser.sex}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="allergies"
          placeholder="Allergies"
          value={newUser.allergies}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="diseases"
          placeholder="Diseases"
          value={newUser.diseases}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="familyMembers"
          placeholder="Family Members (e.g., John Smith - Spouse)"
          value={newUser.familyMembers}
          onChange={handleInputChange}
        />
        <button type="submit">Add User</button>
      </form>

      {/* Display list of users */}
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Sex: {user.sex}</p>
            <p>Allergies: {user.allergies}</p>
            <p>Diseases: {user.diseases}</p>
            <p>Family Members: {user.familyMembers}</p>
            <button className="health-tips-button" onClick={() => handleShowHealthTips(user)}>
              Show Health Tips
            </button>
            <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>
              Delete User
            </button>
          </div>
        ))}
      </div>

      {/* Health Tips Section */}
      {selectedUser && (
        <div className="health-tips-section">
          <h2>Health Tips for {selectedUser.name}</h2>
          <ul>
            {renderHealthTips(selectedUser).map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
