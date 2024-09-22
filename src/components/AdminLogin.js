// AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminLogin.css';

const AdminLogin = () => {
  const [userID, setUserID] = useState("adm");
  const [password, setPassword] = useState("adm");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (userID === "adm" && password === "adm") {
      navigate("/admin-home-page"); 
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Admin Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-group">
          <label>User ID</label>
          <input
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={() => alert("Cancel clicked!")}>
            Cancel
          </button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
