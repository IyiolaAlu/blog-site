import React, { useState } from "react";
import "./Contact.css";
import Modal from "../../components/Modal/Modal";
import Navbarr from "../../components/Navbar/Navbarr";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbarr/>
      <div className="contact-page">
        <div className="contact-container">
          <h1>Contact Me</h1>
          <p>Have a question or want to connect? Send a message.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

   
      <Modal
        show={showModal}
        title="Message Sent 🎉"
        message="Thank you for reaching out. I’ll get back to you as soon as possible."
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Contact;
