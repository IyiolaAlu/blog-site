import React from "react";
import Navbarr from "../../components/Navbar/Navbarr";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbarr />
      <div className="container" style={{ paddingTop: "120px", maxWidth: "900px" }}>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> January 2026</p>

        <p>
          Welcome to <strong>DevJourney</strong>. Your privacy is important to us.
          This Privacy Policy explains how we collect, use, and protect your information
          when you use our website.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Personal information such as name and email address when you sign up</li>
          <li>Profile images you upload</li>
          <li>Comments and content you post on the site</li>
          <li>Authentication data (securely encrypted)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To create and manage user accounts</li>
          <li>To allow users to post comments and content</li>
          <li>To send important emails such as welcome messages</li>
          <li>To improve the website experience</li>
        </ul>

        <h2>Email Communication</h2>
        <p>
          We may send you emails related to your account, including welcome emails
          and important updates. We do not send spam.
        </p>

        <h2>Data Protection</h2>
        <p>
          Your data is stored securely. Passwords are encrypted, and we take reasonable
          measures to protect your personal information.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use trusted third-party services such as cloud hosting and email providers
          strictly for functionality purposes.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access, updates, or deletion of your personal data by contacting us.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
          <br />
          <strong>Email:</strong> aluiyiola50@gmail.com
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
