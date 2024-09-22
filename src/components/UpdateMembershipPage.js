import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateMembershipPage.css';

const UpdateMembershipPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactName: '',
    contactAddress: '',
    aadharCardNo: '',
    startDate: '',
    endDate: '',
    membershipDuration: 'six_months',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
    alert('Membership added successfully!');
  };
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/start-page'); // Redirect to Start page on logout
    alert('You have been logged out!'); // Optional logout alert
  };

  return (
    <div className="update-container">
      <h1>Update Membership</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Membership Number:</label><br />
          <input
            type="text"
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Start Date:</label><br />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>End Date:</label><br />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Membership Extension:</label><br />
          <label>
            <input
              type="radio"
              name="membershipExtension"
              value="six_months"
              checked={formData.membershipExtension === 'six_months'}
              onChange={handleChange}
            />
            Six Months
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="membershipExtension"
              value="one_year"
              checked={formData.membershipExtension === 'one_year'}
              onChange={handleChange}
            />
            One Year
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="membershipExtension"
              value="two_years"
              checked={formData.membershipExtension === 'two_years'}
              onChange={handleChange}
            />
            Two Years
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: '20px', position: 'relative', height: '100px' }}>
        <button 
          style={{ marginRight: '10px' }}
        >
          Cancel
        </button>
        <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
      </div>
    </div>

  );
};

export default UpdateMembershipPage;
