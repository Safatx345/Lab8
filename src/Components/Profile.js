import React from 'react';
import { useLocation, Link } from 'react-router-dom';


function Profile() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="profile-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      <h2 className="profile-title">Profile Page</h2>
      {formData ? (
        <div className="profile-content">
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Favorite Season:</strong> {formData.favoriteSeason}</p>
          <Link to="/dashboard" className="profile-link">Go to Dashboard</Link>
        </div>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
}

export default Profile;