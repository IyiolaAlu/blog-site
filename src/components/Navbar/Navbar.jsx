import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg position-fixed w-100 custom-navbar z-3">
      <div className="container-fluid">
        <a className="navbar-brand custom-brand" href="#">
          DevJourney
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a
                className="nav-link active custom-link"
                aria-current="page"
                href="#"
              >
                Home
              </a> */}
              <Link className="nav-link custom-link"  aria-current="page" to="/posts">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/posts">
                Blog
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Projects
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* Profile icon and buttons */}
          <div className="nav-buttons">
            {isAdmin && (
              <Link to="/admin" className="btn btn-admin">
                Admin
              </Link>
            )}

            <Link to="/profile" className="profile-icon-link">
              <div className="profile-icon">👤</div>
            </Link>

            <button className="btn btn-signup" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
