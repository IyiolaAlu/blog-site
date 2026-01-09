import React from "react";
import "./About.css";
import Navbarr from "../../components/Navbar/Navbarr";

const About = () => {
  return (
    <>
    <Navbarr/>
    <div className="about-page">
      <div className="about-container">
        <h1>About Me</h1>

        <p className="about-intro">
          Hi, I’m <strong>Alu Iyiola</strong>, a passionate developer documenting
          my journey in tech.
        </p>

        <p>
          DevJourney is a personal space where I share what I’m learning,
          building, and exploring in software development. From frontend
          interfaces to backend logic, this platform reflects my growth,
          challenges, and progress as a developer.
        </p>

        <p>
          My goal is to build meaningful projects, improve every day, and help
          others who are also navigating their path into tech.
        </p>

        <p>
          Thanks for being here and following my journey 🚀
        </p>
      </div>
    </div>
    </>
    
  );
};

export default About;
