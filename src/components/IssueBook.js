import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './IssueBook.css';

const IssueBook = () => {
  const navigate = useNavigate();  // Call useNavigate instead of useHistory
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [issueDate, setIssueDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [remarks, setRemarks] = useState('');

  const handleCancel = () => {
    navigate('/home');  // Use navigate() to redirect instead of history.push()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ bookName, author, issueDate, returnDate, remarks });
    alert('Book Issued Successfully!');
    // You can redirect or clear the form here as well
  };

  return (
    <div className="issue-book-container">
      <h2>Book Issue</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Book Name:</label>
          <select
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          >
            <option value="">Select a Book</option>
            <option value="book1">Book 1</option>
            <option value="book2">Book 2</option>
            {/* Add more book options here */}
          </select>
        </div>

        <div className="form-group">
          <label>Enter Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Issue Date:</label>
          <DatePicker
            selected={issueDate}
            onChange={(date) => setIssueDate(date)}
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>

        <div className="form-group">
          <label>Return Date:</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>

        <div className="form-group">
          <label>Remarks:</label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Optional"
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="confirm-button">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueBook;
