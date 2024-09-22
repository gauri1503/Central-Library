// Transactions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Transactions.css';

const Transactions = () => {
  const navigate = useNavigate();

  return (
    <div className="transactions-container">
      <div className="header">
        <button className="home-button" onClick={() => navigate("/admin-home-page")}>
          Admin Home Page
        </button>
        <button className="logout-button" onClick={() => navigate("/")}>
          Log Out
        </button>
      </div>

      <div className="transactions-table">
        <table>
          <thead>
            <tr>
              <th>Chart</th>
              <th>Transactions</th>
              <th>Home</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Is book available?</td>
              <td>
                <button onClick={() => navigate("/book-availability")}>
                  Check Availability
                </button>
              </td>
            </tr>
            <tr>
              <td>Issue book?</td>
              <td>
              <button onClick={() => navigate("/issue-book")}>
                  Issue Book
                </button>
              </td>
            </tr>
            <tr>
              <td>Return book?</td>
              <td>
              <button onClick={() => navigate("/return-book")}>
                  Return Book
                </button>
              </td>
            </tr>
            <tr>
              <td>Pay Fine?</td>
              <td>
              <button onClick={() => navigate("/pay-fine")}>
                  Pay Fine
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
