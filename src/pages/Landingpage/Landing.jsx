import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'

const Landing = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className='headerr position-relative'>
      <div className='heroo container d-flex flex-column align-items-center justify-content-center'>
        <div className="header-contentt d-flex flex-column align-items-center justify-content-center">
          
          {/* Main Title */}
          <h1 className="display-4 fw-bold mb-4">
            Welcome to <span className="text-gradientt">Iyiola's</span> Dev Journey
          </h1>
          
          {/* Subtitle */}
          <h3 className='mb-5'>
            Explore my coding adventures in React, Node.js, and modern web development. 
            Join me as I build, learn, and share insights from my developer journey.
          </h3>
          
          {/* Action Buttons */}
          <div className='btn-containerr d-flex gap-4'>
            <Link to={'/login'} className='landing-btn btn-login'>
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </Link>
            <Link to={'/SignUp'} className='landing-btn btn-signup'>
              <i className="bi bi-person-plus me-2"></i>
              Get Started
            </Link>
          </div>
          
          {/* Features Section */}
          <div className="features mt-5 pt-4">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <p className="feature-text">React & Node.js Tutorials</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-journal-code"></i>
              </div>
              <p className="feature-text">Project Builds & Code Samples</p>
            </div>
             
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <p className="feature-text">Developer Community</p>
            </div>
          </div>
          
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToContent}>
          <span className="mb-2">Explore More</span>
          <div className="scroll-arrow">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Landing