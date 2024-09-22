import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PayFine.css';

const PayFine = () => {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [issueDate, setIssueDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [actualReturnDate, setActualReturnDate] = useState(null);
  const [fineCalculated, setFineCalculated] = useState(0); // default to 0
  const [finePaid, setFinePaid] = useState(false); // default unchecked
  const [remarks, setRemarks] = useState('');

  const handleCancel = () => {
    navigate('/home'); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      bookName,
      author,
      serialNo,
      issueDate,
      returnDate,
      actualReturnDate,
      fineCalculated,
      finePaid,
      remarks,
    };
    console.log(formData);
    alert('Fine Payment Submitted!');
    // Handle form submission logic here (e.g., saving data)
  };

  return (
    <div className="pay-fine-container">
      <h2>Pay Fine</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Book Name:</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
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
          <label>Serial No:</label>
          <input
            type="text"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
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
          <label>Actual Return Date:</label>
          <DatePicker
            selected={actualReturnDate}
            onChange={(date) => setActualReturnDate(date)}
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>

        <div className="form-group">
          <label>Fine Calculated:</label>
          <input
            type="number"
            value={fineCalculated}
            onChange={(e) => setFineCalculated(e.target.value)}
            defaultValue={0} // Default to zero
            required
          />
        </div>

        <div className="form-group">
          <label>Fine Paid:</label>
          <input
            type="checkbox"
            checked={finePaid}
            onChange={(e) => setFinePaid(e.target.checked)}
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

export default PayFine;
