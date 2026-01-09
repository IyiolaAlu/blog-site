// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   let navigate = useNavigate();

//   const [id, setid] = useState("");
//   const [fullname, setfullname] = useState("");

//   useEffect(() => {
//     let person = localStorage.getItem("user");

//     // ✅ If no stored user, redirect safely
//     if (!person) {
//       navigate("/login", { replace: true });
//       return;
//     }

//     let user = JSON.parse(person);
//     let token = localStorage.getItem("token");

//     const fetchUser = async () => {
//       try {
//         let response = await axios.get(
//           `http://localhost:5006/api/v1/get-user/${user.id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.data.message === "User Unauthorized!") {
//           localStorage.clear();
//           navigate("/login", { replace: true });
//         } else {
//           // Optional: set user data
//           setfullname(response.data?.user?.fullname || "");
//         }
//       } catch (error) {
//         console.log("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, [navigate]);

//   return <div>Profile {fullname}</div>;
// };

// export default Profile;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css"; // optional, you can remove if you don’t have it

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const token = localStorage.getItem("token");

//     // 🚫 Not logged in
//     if (!storedUser || !token) {
//       navigate("/login");
//       return;
//     }

//     setUser(JSON.parse(storedUser));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   if (!user) {
//     return <h2 style={{ textAlign: "center" }}>Loading profile...</h2>;
//   }

//   return (
//     <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
//       <div style={{ textAlign: "center" }}>
//         <img
//           src={user.profilePicture}
//           alt="Profile"
//           style={{
//             width: "140px",
//             height: "140px",
//             borderRadius: "50%",
//             objectFit: "cover",
//             marginBottom: "20px",
//           }}
//         />
//         <h2>{user.fullname}</h2>
//         <p>{user.email}</p>

//         <button
//           onClick={handleLogout}
//           style={{
//             marginTop: "20px",
//             padding: "10px 20px",
//             border: "none",
//             backgroundColor: "#e63946",
//             color: "#fff",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Logout
//         </button>

//         <button onClick={() => navigate("/edit-profile")}>
//   Edit Profile
// </button>

//       </div>
//     </div>
//   );
// };

// export default Profile;

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
              <button className="change-photo-btn">
                Change Photo
              </button>
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