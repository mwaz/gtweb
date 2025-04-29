import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import images from "../js/images";
import ContactForm from "./ContactForm"; // Import the ContactForm component

// Recommendation: Extract Header and Footer into reusable components
function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // IMPORTANT: Replace "YOUR_FORMSPREE_ENDPOINT" with your actual Formspree form endpoint URL
  const formspreeEndpoint = "https://formspree.io/f/xblodjko";

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Contact Greentwiste Exporters for inquiries about our premium, sustainably-sourced herbs from Kenya. Reach out to us for more information."
        />
        <meta
          name="keywords"
          content="herbs exporter, contact, Kenya herbs, sustainable herbs, premium herbs"
        />
        <meta
          name="author"
          content="Greentwiste Growers and Exporters"
        />
        <title>
          Contact Us - Greentwiste Exporters | Premium Herbs from Kenya
        </title>
      </Helmet>
      <header className="header">
        <div className="logo">
          <img
            src={images.logo}
            alt="Greentwiste Exporters Logo"
          />
          <span>Greentwiste Growers and Exporters </span>
          {/* Consider adding Phone/Email here too if desired */}
        </div>
        <nav className="nav">
          <button
            type="button"
            className="icon"
            onClick={toggleMenu}
          >
            {/* Use React onClick */}
            <div className="hamburger">&#9776;</div>
          </button>

          <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
            {" "}
            {/* Use state for class */}
            {/* Added onClick={toggleMenu} to close menu on navigation */}
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            {/* Link Products to home section or a dedicated page if it exists */}
            <li>
              <Link
                to="/#products"
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/sustainability"
                onClick={toggleMenu}
              >
                Sustainability
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>{" "}
            {/* Added Blog link */}
          </ul>
        </nav>
      </header>

      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or inquiries about our premium herbs or
            sustainable practices, feel free to reach out using the form below
            or through our contact details. We are here to assist you!
          </p>

          <ContactForm formspreeEndpoint={formspreeEndpoint} />

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong>
              <a href="mailto:info@greentwisteexporters.com">
                info@greentwisteexporters.com
              </a>
            </p>
            <p>
              <strong>Whatsapp us:</strong>
              <a href="https://wa.link/ibusi1">+254-702-449-450</a>
            </p>
            <p>
              <strong>Location:</strong> Kenya
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Greentwiste Exporters. All rights reserved.</p>
          <div className="social-media">
            <a href="https://x.com/GreenTwiste">
              <img
                src={images.x}
                alt="Twitter"
              />
            </a>
            <a href="https://www.instagram.com/greentwiste/">
              <img
                src={images.insta}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </footer>
      {/* Removed script tags - should be handled globally */}
      {/* <script src="js/scripts.js"></script> */}
      {/* <script src="js/tawk.js"></script> */}
      {/* <script src="js/hamburger.js"></script> */}
    </div>
  );
}

export default Contact;
