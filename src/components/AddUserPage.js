import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUserPage.css';

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    userType: 'new_user', 
    name: '',
    isActive: false,
    isAdmin: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User data submitted: ', formData);
    alert(`${formData.userType === 'new_user' ? 'New User' : 'Existing User'} ${formData.isActive ? 'Active' : 'Inactive'} ${formData.isAdmin ? 'Admin' : ''} user saved!`);
  };

  const handleCancel = () => {
    navigate('/maintenance');
  };

  return (
    <div className="user-container">
      <h1>User Management</h1>
      <form onSubmit={handleSubmit}>
       
        <div style={{ marginBottom: '10px' }}>
          <label>User Type:</label><br />
          <label>
            <input
              type="radio"
              name="userType"
              value="new_user"
              checked={formData.userType === 'new_user'}
              onChange={handleChange}
            />
            New User
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="userType"
              value="existing_user"
              checked={formData.userType === 'existing_user'}
              onChange={handleChange}
            />
            Existing User
          </label>
        </div>

        
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

       
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            Active
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
            />
            Admin
          </label>
        </div>

        
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: '20px', position: 'relative', height: '100px' }}>
        <button 
          style={{ marginRight: '10px' }}
          onClick={handleCancel}
        >
          Cancel
        </button>

      </div>
    </div>
  );
};

export default AddUserPage;