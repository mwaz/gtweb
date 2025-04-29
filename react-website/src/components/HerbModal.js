import React, { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

const HerbModal = ({ herb, onClose }) => {
  const [isContactModalOpenInternal, setIsContactModalOpenInternal] =
    useState(false);

  const openContactModalInternal = () => {
    setIsContactModalOpenInternal(true);
  };

  const closeContactModalInternal = () => {
    setIsContactModalOpenInternal(false);
  };

  if (!herb) {
    return null;
  }

  return (
    <div className="herb-modal">
      <div className="herb-modal-content">
        <span
          className="herb-modal-close"
          onClick={onClose}
        >
          &times;
        </span>
        <h2>{herb.name}</h2>
        <p>{herb.description}</p>
        <h3>Packaging</h3>
        <p>{herb.packaging}</p>
        <button
          className="btn btn-primary"
          onClick={openContactModalInternal}
        >
          Get a Customized Quote
        </button>
      </div>
      <Modal
        isOpen={isContactModalOpenInternal}
        onClose={closeContactModalInternal}
      >
        <h2>Get a Customized Quote</h2>
        <ContactForm formspreeEndpoint="https://formspree.io/f/xblodjko" />
      </Modal>
    </div>
  );
};

export default HerbModal;
