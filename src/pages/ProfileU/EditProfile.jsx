import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }

    const names = user.fullname.split(" ");
    setFirstName(names[0]);
    setLastName(names[1] || "");
  }, [navigate]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImage(reader.result);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:5006/api/v1/update-profile",
        { firstName, lastName, profilePicture: image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      alert("Profile update failed");
    }

    setLoading(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-overlay">
        <div className="profile-container">
          <div className="edit-profile-card">
            
            {/* Header Section */}
            <div className="profile-header">
              <h1 className="profile-title">Edit Profile</h1>
              <button 
                className="back-btn"
                onClick={() => navigate("/profile")}
              >
                ← Back
              </button>
            </div>

            {/* Profile Image Upload */}
            <div className="profile-image-upload">
              <div className="upload-preview">
                {image ? (
                  <img src={image} alt="Preview" className="preview-image" />
                ) : (
                  <div className="upload-placeholder">
                    <span className="upload-icon">📷</span>
                    <span>No image selected</span>
                  </div>
                )}
              </div>
              <label className="file-upload-btn">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImage}
                  className="file-input"
                />
                Choose Photo
              </label>
            </div>

            {/* Edit Form */}
            <form className="edit-profile-form" onSubmit={handleUpdate}>
              
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-input"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-input"
                  placeholder="Enter your last name"
                />
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => navigate("/profile")}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="save-btn"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
