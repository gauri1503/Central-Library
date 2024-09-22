// BookAvailability.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookAvailability.css';

const BookAvailability = () => {
  const navigate = useNavigate();

  const bookNames = ['The Alchemist', '1984', 'The Catcher in the Rye', 'To Kill a Mockingbird'];
  const authors = ['Paulo Coelho', 'George Orwell', 'J.D. Salinger', 'Harper Lee'];

  const [selectedBook, setSelectedBook] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSerialNumber, setSelectedSerialNumber] = useState('');

  const sampleResults = [
    { bookName: 'The Alchemist', authorName: 'Paulo Coelho', serialNumber: 'SN001', available: 'Y' },
    { bookName: '1984', authorName: 'George Orwell', serialNumber: 'SN002', available: 'Y' },
    { bookName: 'The Catcher in the Rye', authorName: 'J.D. Salinger', serialNumber: 'SN003', available: 'Y' },
    { bookName: 'To Kill a Mockingbird', authorName: 'Harper Lee', serialNumber: 'SN004', available: 'N' },
  ];

  const handleSearch = () => {
    
    setSearchResults(sampleResults);
  };

  const handleIssueBook = () => {
    if (selectedSerialNumber) {
      alert(`Book with serial number ${selectedSerialNumber} has been issued.`);
    } else {
      alert('Please select a book to issue.');
    }
  };

  return (
    <div className="book-availability-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate("/transactions")}>
          Back
        </button>
        <button className="logout-button" onClick={() => navigate("/")}>
          Log Out
        </button>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <table>
          <tbody>
            <tr>
              <td>Enter Book Name</td>
              <td>
                <select
                  value={selectedBook}
                  onChange={(e) => setSelectedBook(e.target.value)}
                >
                  <option value="" disabled>Select a book</option>
                  {bookNames.map((book, index) => (
                    <option key={index} value={book}>
                      {book}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Enter Author</td>
              <td>
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                >
                  <option value="" disabled>Select an author</option>
                  {authors.map((author, index) => (
                    <option key={index} value={author}>
                      {author}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="action-buttons">
          <button className="search-button" onClick={handleSearch}>Search</button>
          <button className="cancel-button" onClick={() => setSearchResults([])}>Cancel</button>
        </div>
      </div>

      {/* Results Section */}
      {searchResults.length > 0 && (
        <div className="results-section">
          <table>
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Serial Number</th>
                <th>Available</th>
                <th>Select to Issue the Book</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.bookName}</td>
                  <td>{result.authorName}</td>
                  <td>{result.serialNumber}</td>
                  <td>{result.available}</td>
                  <td>
                    <input
                      type="radio"
                      name="bookSelect"
                      disabled={result.available === 'N'}
                      value={result.serialNumber}
                      onChange={(e) => setSelectedSerialNumber(e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="issue-button" onClick={handleIssueBook}>
            Issue Book
          </button>
        </div>
      )}
    </div>
  );
};

export default BookAvailability;
