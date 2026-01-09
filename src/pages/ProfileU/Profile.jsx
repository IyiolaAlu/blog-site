import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-overlay">
        <div className="profile-container">
          <div className="profile-card">
            
            {/* Header Section */}
            <div className="profile-header">
              <h1 className="profile-title">My Profile</h1>
              <button 
                className="edit-profile-btn"
                onClick={() => navigate("/editprofile")}
              >
                Edit Profile
              </button>
            </div>

            {/* Profile Image Section */}
            <div className="profile-image-section">
              <div className="profile-avatar">
                {user?.profilePicture ? (
                  <img 
                    src={user.profilePicture} 
                    alt="Profile" 
                    className="avatar-image"
                  />
                ) : (
                  <div className="avatar-fallback">
                    {user?.fullname?.charAt(0) || "U"}
                  </div>
                )}
              </div>
            </div>

            {/* User Info Section */}
            <div className="profile-info-section">
              <div className="info-group">
                <label className="info-label">Full Name</label>
                <div className="info-value">{user?.fullname || "Not set"}</div>
              </div>

              <div className="info-group">
                <label className="info-label">Email</label>
                <div className="info-value">{user?.email || "Not set"}</div>
              </div>

              <div className="info-group">
                <label className="info-label">Member Since</label>
                <div className="info-value">
                  {user?.createdAt 
                    ? new Date(user.createdAt).toLocaleDateString() 
                    : new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="profile-actions">
              <button 
                className="action-btn primary-btn"
                onClick={() => navigate("/homepage")}
              >
                Go to Dashboard
              </button>
              <button 
                className="action-btn secondary-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;