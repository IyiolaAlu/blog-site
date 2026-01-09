// components/Navbar/Navbar.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbarr.css";

const Navbarr = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/homepage";

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/homepage");
  };

  const user = localStorage.getItem("user");

  return (
    <nav
      className={`navbar navbar-expand-lg position-fixed w-100 z-3 ${
        isHomePage ? "navbar-transparent" : "navbar-solid"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/homepage">
          <span className="logo-text">DevJourney</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/homepage" ? "active" : ""
                }`}
                to="/homepage"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/posts" ? "active" : ""
                }`}
                to="/posts"
              >
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-auth">
            {user ? (
              <>
                <Link to="/profile" className="profile-link">
                  <div className="profile-avatarr">
                    {JSON.parse(user)?.firstName?.charAt(0) || "👤"}
                  </div>
                </Link>
                <button className="btn btn-logout" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-login">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-signup">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
