import React from "react";
import "./Modal.css";

const Modal = ({ show, title, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Modal;
