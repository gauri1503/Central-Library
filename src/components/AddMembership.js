import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMembershipPage.css';

const AddMembershipPage = () => {
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
    navigate('/start-page');
    alert('You have been logged out!'); 
  };

  return (
    <div className="membership-container">
      <h1>Add Membership</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Contact Name:</label><br />
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Contact Address:</label><br />
          <input
            type="text"
            name="contactAddress"
            value={formData.contactAddress}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Aadhar Card No:</label><br />
          <input
            type="text"
            name="aadharCardNo"
            value={formData.aadharCardNo}
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
          <label>Membership Duration:</label><br />
          <label>
            <input
              type="radio"
              name="membershipDuration"
              value="six_months"
              checked={formData.membershipDuration === 'six_months'}
              onChange={handleChange}
            />
            Six Months
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="membershipDuration"
              value="one_year"
              checked={formData.membershipDuration === 'one_year'}
              onChange={handleChange}
            />
            One Year
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="membershipDuration"
              value="two_years"
              checked={formData.membershipDuration === 'two_years'}
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

export default AddMembershipPage;
