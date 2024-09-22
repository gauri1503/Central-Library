import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddBookMoviePage.css'

const AddBookMoviePage = () => {
  const [formData, setFormData] = useState({
    type: 'book', 
    name: '',
    procurementDate: '',
    quantity: 1, 
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
    alert(`${formData.type === 'book' ? 'Book' : 'Movie'} added successfully!`);
  };

  const handleCancel = () => {
    navigate('/maintenance'); 
  };

  return (
    <div className="addbook-container">
      <h1>Add Book/Movie</h1>
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
          <label>Date of Procurement:</label><br />
          <input
            type="date"
            name="procurementDate"
            value={formData.procurementDate}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Quantity/Copies:</label><br />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
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

export default AddBookMoviePage;
