import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { updateName } from "../../redux/appSlice.js";
import { useDispatch } from "react-redux";
import "./SignUp.css";

export const Signup = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  const DEFAULT_AVATAR =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEB-FmVpoxcfMWFBHLpHd7FjhRBXJ6aaLjw&s";

  const handleImage = (e) => {
    let picture = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        setloading(true);
        const response = await axios.post(
          "http://localhost:5006/api/v1/signUp",
          {
            profilePicture: image || DEFAULT_AVATAR,
            ...values,
          }
        );

        if (response.data.status) {
          const { token, user } = response.data;

          // Save user + token
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          dispatch(updateName(user.fullname));

          // Show modal instead of alert
          setShowSuccessModal(true);
          setloading(false);

          formik.resetForm();
          setImage(null);
        }
      } catch (error) {
        setloading(false);
        alert(
          error.response?.data?.message || "Signup failed. Please try again."
        );
      }
    },

    validationSchema: yup.object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /[A-Z]+/,
          "Password must contain at least one uppercase letter"
        )
        .matches(/\d+/, "Password must contain at least one number")
        .matches(
          /[@$!%*#?&]+/,
          "Password must contain at least one special character"
        ),
      confirmPassword: yup.string().required("Confirm your password"),
    }),
  });

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/login");
  };

  return (
    <div className="signup-page">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="signup-success-modal">
          <div
            className="signup-modal-overlay"
            onClick={handleCloseModal}
          ></div>
          <div className="signup-modal-content">
            <div className="signup-modal-icon">🎉</div>
            <h2 className="signup-modal-title">Welcome to DevJourney!</h2>
            <p className="signup-modal-message">
              You have successfully created your account. Login to explore with
              us and follow my coding journey.
            </p>
            <div className="signup-modal-actions">
              <button
                className="signup-modal-btn-primary"
                onClick={() => navigate("/login")}
              >
                Go to Login
              </button>
              <button
                className="signup-modal-btn-secondary"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="signup-overlay">
        <div className="signup-container">
          <div className="signup-form-wrapper">
            <div className="form-header">
              <h1 className="form-title">Join iyiolaDevJourney</h1>
              <p className="form-subtitle">
                Create your account to follow my coding journey
              </p>
            </div>

            <form className="signup-form" onSubmit={formik.handleSubmit}>
              <div className="image-upload-section">
                <label htmlFor="profileUpload" className="image-label">
                  <img
                    src={image || DEFAULT_AVATAR}
                    alt="Profile preview"
                    className="profile-image"
                  />
                  <span className="upload-text">Click to upload</span>
                </label>
                <input
                  id="profileUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  style={{ display: "none" }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-input"
                  placeholder="Enter your first name"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <small className="error-message">
                    {formik.errors.firstName}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-input"
                  placeholder="Enter your last name"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <small className="error-message">
                    {formik.errors.lastName}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-input"
                  placeholder="Enter your email"
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="error-message">{formik.errors.email}</small>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-input"
                  placeholder="Create a secure password"
                />
                {formik.touched.password && formik.errors.password && (
                  <small className="error-message">
                    {formik.errors.password}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-input"
                  placeholder="Confirm your password"
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <small className="error-message">
                      {formik.errors.confirmPassword}
                    </small>
                  )}
              </div>

              <button type="submit" className="signup-btn" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="signin-link">
              Already have an account?{" "}
              <a href="/login" className="link">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
