import React from "react";
import Navbarr from "../../components/Navbar/Navbarr";
import Footer from "../../components/Footer/Footer";
import "./Legal.css";

const TermsOfService = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbarr />
      <div className="legal-page container">
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: January 2026</p>

        {/* Optional: Add Table of Contents for longer pages */}
        <div className="legal-toc">
          <h3>Contents</h3>
          <ul>
            <li><a href="#acceptance">Acceptance of Terms</a></li>
            <li><a href="#accounts">User Accounts</a></li>
            <li><a href="#content">Content Guidelines</a></li>
            <li><a href="#ip">Intellectual Property</a></li>
            <li><a href="#termination">Termination</a></li>
            <li><a href="#liability">Limitation of Liability</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <section id="acceptance">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using DevJourney, you agree to be bound by these
            Terms of Service. If you disagree with any part of these terms,
            you may not access the platform.
          </p>
        </section>

        <section id="accounts">
          <h2>2. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account.
          </p>
          <ul>
            <li>Use accurate and complete information when registering</li>
            <li>Update your information to keep it current</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section id="content">
          <h2>3. Content Guidelines</h2>
          <p>
            You may not post unlawful, harmful, threatening, abusive, harassing,
            defamatory, vulgar, obscene, or otherwise objectionable content.
          </p>
        </section>

        <section id="ip">
          <h2>4. Intellectual Property</h2>
          <p>
            All content on DevJourney, including text, graphics, logos, and
            software, is owned by DevJourney unless otherwise stated.
          </p>
        </section>

        <section id="termination">
          <h2>5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms without prior notice.
          </p>
        </section>

        <section id="liability">
          <h2>6. Limitation of Liability</h2>
          <p>
            DevJourney is not liable for any direct, indirect, incidental,
            special, or consequential damages resulting from the use or
            inability to use this website.
          </p>
        </section>

        <section id="contact">
          <h2>7. Contact</h2>
          <p>
            Questions about these Terms? Contact us at:
            <br />
            <strong>aluiyiola50@gmail.com</strong>
          </p>
          <p>We typically respond within 1-2 business days.</p>
        </section>

        <button onClick={scrollToTop} className="legal-back-to-top">
          <i className="bi bi-arrow-up"></i> Back to Top
        </button>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;