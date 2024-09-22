import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './UpdateBookMoviePage.css';

const UpdateBookMoviePage = () => {
  const [formData, setFormData] = useState({
    type: 'book', 
    name: '',
    serialNo: '',
    status: '',
    date: '',
  });

  const navigate = useNavigate(); 

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
    alert(`${formData.type === 'book' ? 'Book' : 'Movie'} updated successfully!`);
  };

  const handleCancel = () => {
    navigate('/maintenance'); 
  };

  return (
    <div className="updatebook-container">
      <h1>Update Book/Movie</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Type:</label><br />
          <label>
            <input
              type="radio"
              name="type"
              value="book"
              checked={formData.type === 'book'}
              onChange={handleChange}
            />
            Book
          </label>
          <label style={{ marginLeft: '20px' }}>
            <input
              type="radio"
              name="type"
              value="movie"
              checked={formData.type === 'movie'}
              onChange={handleChange}
            />
            Movie
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>{formData.type === 'book' ? 'Book' : 'Movie'} Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Serial No:</label><br />
          <input
            type="text"
            name="serialNo"
            value={formData.serialNo}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Status:</label><br />
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="">Select Status</option>
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
            <option value="damaged">Damaged</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Date:</label><br />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
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

export default UpdateBookMoviePage;
