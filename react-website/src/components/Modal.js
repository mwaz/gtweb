import React from 'react';
import './../css/Modal.css'; // We'll create this CSS file next

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Prevent closing when clicking inside content */}
        <button className="modal-close-button" onClick={onClose}>
          &times; {/* Close symbol */}
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
