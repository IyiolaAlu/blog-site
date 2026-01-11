import React from "react";
import Navbarr from "../../components/Navbar/Navbarr";
import Footer from "../../components/Footer/Footer";
import "./Legal.css";

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbarr />
      <div className="legal-page container">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: January 2026</p>

        {/* Optional: Add Table of Contents for longer pages */}
        <div className="legal-toc">
          <h3>Contents</h3>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#collect">Information We Collect</a></li>
            <li><a href="#use">How We Use Your Information</a></li>
            <li><a href="#cookies">Cookies</a></li>
            <li><a href="#security">Data Security</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <section id="intro">
          <h2>1. Introduction</h2>
          <p>
            DevJourney values your privacy. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website.
            By using DevJourney, you consent to the practices described.
          </p>
        </section>

        <section id="collect">
          <h2>2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, profile image</li>
            <li><strong>Account Information:</strong> Username, password (encrypted)</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, interactions</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
          </ul>
        </section>

        <section id="use">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To create, maintain, and secure your account</li>
            <li>To send important emails (welcome emails, updates)</li>
            <li>To improve our platform, content, and user experience</li>
            <li>To respond to your inquiries and provide support</li>
            <li>To analyze usage patterns and optimize performance</li>
          </ul>
        </section>

        <section id="cookies">
          <h2>4. Cookies</h2>
          <p>
            We use cookies to enhance your experience. Cookies are small data
            files stored on your device. You can disable cookies in your
            browser settings, but this may affect functionality.
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact</li>
            <li><strong>Preference Cookies:</strong> Remember your settings</li>
          </ul>
        </section>

        <section id="security">
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures including encryption,
            secure servers, and access controls to protect your data.
            However, no system is 100% secure, and we cannot guarantee
            absolute security.
          </p>
          <p>
            In case of a data breach, we will notify affected users within
            72 hours as required by law.
          </p>
        </section>

        <section id="contact">
          <h2>6. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or your data,
            contact us at:
            <br />
            <strong>aluiyiola50@gmail.com</strong>
          </p>
          <p>
            You can also request to view, update, or delete your personal
            information by contacting us.
          </p>
        </section>

        <button onClick={scrollToTop} className="legal-back-to-top">
          <i className="bi bi-arrow-up"></i> Back to Top
        </button>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;