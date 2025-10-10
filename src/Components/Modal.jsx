import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
      <h2 id="modal-title">Modal Title</h2>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;