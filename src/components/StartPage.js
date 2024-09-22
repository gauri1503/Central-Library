import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css"; // Import external CSS

const StartPage = () => {
  return (
    <div className="start-container">
      <div className="hero-section">
        <h1 className="welcome-text">
          Welcome <span className="to-text">to</span>
        </h1>
        <h2 className="subheading">CENTRAL LIBRARY</h2>
      </div>
      <div className="button-group">
        <Link to="/login">
          <button className="start-button">Login</button>
        </Link>
        
      </div>
    </div>
  );
};

export default StartPage;
