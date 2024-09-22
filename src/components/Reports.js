import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reports.css';

const Reports = () => {
  const navigate = useNavigate();

  const handleButtonClick = (reportType) => {
    alert(`Fetching report: ${reportType}`);
    // Add logic to handle report fetching
  };

  const handleAdminHome = () => {
    navigate('/admin-home-page'); // Redirect to Admin Home page
  };

  const handleLogout = () => {
    navigate('/start-page'); // Redirect to Start page on logout
    alert('You have been logged out!'); // Optional logout alert
  };

  return (
    <div className="reports-container">
      {/* Home button at the top right corner */}
      <button className="home-button" onClick={handleAdminHome}>
        Home
      </button>

      <h2>Available Reports</h2>

      {/* Report buttons */}
      <div className="reports-list">
      <button onClick={() => navigate("/master-book-list")}>
          Master List of Books
        </button>

        <button onClick={() => navigate("/master-movie-list")}>
          Master List of Movies
        </button>

        <button onClick={() => navigate("/master-membership-list")}>
          Master List of Memberships
        </button>

        <button onClick={() => navigate("/active-issues")}>
          Active Issues
        </button>

        <button onClick={() => navigate("/overdue-returns")}>
          Overdue Returns
        </button>

        <button onClick={() => navigate("/pending-issue-requests")}>
          Pending Issue Requests
        </button>
      </div>

      {/* Logout button at the bottom right corner */}
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Reports;
