import React from 'react';
import { Link } from 'react-router-dom';
import './Maintenance.css'

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <h1>Maintenance Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Membership</h3>
        <Link to="/add-membership">
        <button>Add</button>
        </Link>
        <Link to="/update-membership">
        <button>Update</button>
        </Link>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Books/Movies</h3>
        <Link to="/add-book-movie">
        <button>Add</button>
        </Link>
        <Link to="/update-book-movie">
        <button>Update</button>
        </Link>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>User Management</h3>
        <Link to="/add-user">
        <button>Add</button>
        </Link>
        <Link to="/update-user">
        <button>Update</button>
        </Link>
      </div>

      <Link to="/">
        <button style={{ position: 'absolute', top: '10px', right: '10px' }}>Home</button>
      </Link>
      
    </div>
  );
};

export default MaintenancePage;
