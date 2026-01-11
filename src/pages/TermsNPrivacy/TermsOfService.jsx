import React from "react";
import Navbarr from "../../components/Navbar/Navbarr";

const TermsOfService = () => {
  return (
    <>
      <Navbarr />
      <div className="container" style={{ paddingTop: "120px", maxWidth: "900px" }}>
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> January 2026</p>

        <p>
          By accessing or using <strong>DevJourney</strong>, you agree to these Terms
          of Service. If you do not agree, please do not use the website.
        </p>

        <h2>Use of the Website</h2>
        <p>
          You agree to use this website for lawful purposes only and not to engage
          in harmful or abusive behavior.
        </p>

        <h2>User Accounts</h2>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your account</li>
          <li>You must provide accurate and truthful information</li>
          <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
        </ul>

        <h2>User Content</h2>
        <p>
          You are responsible for the content you post. Content that is offensive,
          illegal, or harmful is not allowed.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, unless otherwise stated, belongs to DevJourney
          and may not be copied without permission.
        </p>

        <h2>Service Availability</h2>
        <p>
          We strive to keep the website available at all times but do not guarantee
          uninterrupted access.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          DevJourney is not liable for any damages arising from the use of this website.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We may update these Terms of Service at any time. Continued use of the website
          means you accept the changes.
        </p>

        <h2>Contact</h2>
        <p>
          For questions regarding these terms, contact us at:
          <br />
          <strong>Email:</strong> aluiyiola50@gmail.com
        </p>
      </div>
    </>
  );
};

export default TermsOfService;
