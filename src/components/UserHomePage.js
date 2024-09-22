import React from 'react';
import { useNavigate } from "react-router-dom";

const UserHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="user-container">
      <div className="header">
        <h2>User Home Page</h2>
        <button className="back-button" onClick={() => alert("Back clicked!")}>
          Back
        </button>
      </div>

      <div className="sections">
        <button className="section-button" onClick={() => navigate("/reports")}>
          Reports
        </button>
        <button className="section-button" onClick={() => navigate("/transactions")}>
          Transactions
        </button>
      </div>

      <div className="product-details">
        <h3>Product Details</h3>
        <table>
          <thead>
            <tr>
              <th>Code No From</th>
              <th>Code No To</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SC(B/M)000001</td>
              <td>SC(B/M)000001</td>
              <td>Science</td>
            </tr>
            <tr>
              <td>EC(B/M)000001</td>
              <td>EC(B/M)000001</td>
              <td>Economics</td>
            </tr>
            <tr>
              <td>FC(B/M)000001</td>
              <td>FC(B/M)000001</td>
              <td>Fiction</td>
            </tr>
            <tr>
              <td>CH(B/M)000001</td>
              <td>CH(B/M)000001</td>
              <td>Children</td>
            </tr>
            <tr>
              <td>PD(B/M)000001</td>
              <td>PD(B/M)000001</td>
              <td>Personal Development</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="logout-button" onClick={() => alert("Logged out")}>
        Log Out
      </button>
    </div>
  );
};
export default UserHomePage;
