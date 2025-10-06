import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import images from "../js/images";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import HerbModal from "./HerbModal";

// Recommendation: Consider extracting the Header into its own reusable component
// and placing it in App.js for consistency across all pages.
function Home() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHerbModalOpen, setIsHerbModalOpen] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHerbClick = (herb) => {
    setSelectedHerb(herb);
    setIsHerbModalOpen(false);
  };

  const closeHerbModal = () => {
    setIsHerbModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeHerbModal();
  };

  const closeModal = () => {
    setSelectedHerb(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Discover premium, sustainably-sourced herbs with Greentwiste Growers and Exporters, located in Kenya. Bringing nature's best, fresh herbs to your doorstep. Contact us for inquiries."
        />
        <meta
          name="keywords"
          content="herbs exporter, herbs grower, sustainable herbs, fresh herbs export, Kenya herbs, ethical sourcing"
        />
        <meta
          name="author"
          content="Greentwiste Growers and Exporters"
        />
        <title>
          Greentwiste Exporters | Premium Herbs Grower and Exporter in Kenya
        </title>
      </Helmet>
      <header className="header">
        <div className="logo">
          <img
            src={images.logo}
            alt="Greentwiste Exporters Logo"
          />
          <div className="header-text">
            <h1>Greentwiste Exporters</h1>
            <p>Phone: +254702449450 | Email: greentwiste@gmail.com</p>
          </div>
        </div>

        <nav className="nav">
          <button
            type="button"
            className="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div
              // id="hamburger" // ID might not be needed with React state management
              className="hamburger"
            >
              &#9776;
            </div>
          </button>

          <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
            {" "}
            {/* Use state to toggle class */}
            {/* Recommendation: Use React Router Links for internal navigation if these sections are separate routes */}
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
              >
                {t('home')}
              </a>{" "}
              {/* Close menu on click */}
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
              >
                {t('about')}
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={toggleMenu}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#sustainability"
                onClick={toggleMenu}
              >
                {t('sustainability')}
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
              >
                {t('contact')}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={toggleMenu}
              >
                {t('blog')}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className="hero-section" // Ensure background image styles are applied here or globally
      >
        <div className="hero-content">
          {/* Updated Headline and Sub-headline */}
          <h1>{t('premiumHerbs')}</h1>
          <p>
            Experience consistent quality and exceptional service from a leading
            herb exporter committed to sustainable practices.
          </p>
          {/* Updated CTA */}
          <button
            onClick={openModal}
            className="btn btn-primary"
          >
            {t('contactForm')}
          </button>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <h2>Get a Customized Quote</h2>
        <ContactForm formspreeEndpoint="https://formspree.io/f/xblodjko" />
      </Modal>

      {/* New "Why Choose Us?" Section */}
      <section
        id="why-choose-us"
        className="why-choose-us-section"
      >
        <h2>Why Partner With Greentwiste?</h2>
        <ul>
          <li>Rigorous Quality Control Processes</li>
          <li>Direct & Ethical Sourcing Partnerships</li>
          <li>Global Export & Logistics Expertise</li>
          <li>Dedicated Customer Support</li>
          <li>Commitment to Sustainable Practices</li>
          {/* Optional: <li>Years of Industry Experience</li> */}
        </ul>
      </section>

      <section
        id="products"
        className="featured-products"
      >
        <h2>{t('products')}</h2>
        {/* Consider making the title a link to="/contact"><h2>Our Featured Herbs</h2></Link> */}
        <div className="products-grid">
          {/* TODO: Make these cards linkable to product detail pages or sections when available */}
          <div
            className="product-card"
            onClick={() =>
              handleHerbClick({
                name: "Basil",
                image: images.basil,
                description: "Aromatic and fresh herb.",
                packaging:
                  "Packaged in sleeves for retail customers or in boxes for wholesale customers. Available in 100g, 50g, and 20g packets.",
              })
            }
          >
            <img
              src={images.basil}
              alt="Fresh Basil"
            />
            <h3>Basil</h3>
            <p>Aromatic and fresh.</p>
          </div>
          <div
            className="product-card"
            onClick={() =>
              handleHerbClick({
                name: "Mint",
                image: images.mint,
                description: "Cooling and refreshing herb.",
                packaging:
                  "Packaged in sleeves for retail customers or in boxes for wholesale customers. Available in 100g, 50g, and 20g packets.",
              })
            }
          >
            <img
              src={images.mint}
              alt="Fresh Mint"
            />
            <h3>Mint</h3>
            <p>Cooling and refreshing.</p>
          </div>
          <div
            className="product-card"
            onClick={() =>
              handleHerbClick({
                name: "Oregano",
                image: images.oregano,
                description: "Bold and flavorful herb.",
                packaging:
                  "Packaged in sleeves for retail customers or in boxes for wholesale customers. Available in 100g, 50g, and 20g packets.",
              })
            }
          >
            <img
              src={images.oregano}
              alt="Fresh Oregano"
            />
            <h3>Oregano</h3>
            <p>Bold and flavorful.</p>
          </div>
        </div>
        <div className="products-grid">
          <div
            className="product-card"
            onClick={() =>
              handleHerbClick({
                name: "Rosemary",
                image: images.rosemary,
                description: "Piney and earthy herb.",
                packaging:
                  "Packaged in sleeves for retail customers or in boxes for wholesale customers. Available in 100g, 50g, and 20g packets.",
              })
            }
          >
            <img
              src={images.rosemary}
              alt="Fresh Rosemary"
            />
            <h3>Rosemary</h3>
            <p>Piney and earthy.</p>
          </div>
          <div
            className="product-card"
            onClick={() =>
              handleHerbClick({
                name: "Thyme",
                image: images.thyme,
                description: "Earthy and calming herb.",
                packaging:
                  "Packaged in sleeves for retail customers or in boxes for wholesale customers. Available in 100g, 50g, and 20g packets.",
              })
            }
          >
            <img
              src={images.thyme}
              alt="Fresh Thyme"
            />
            <h3>Thyme</h3>
            <p>Earthy and calming.</p>
          </div>
          <div
            className="product-card"
            onClick={() =>
              handleHerbClick({
                name: "Tarragon",
                image: images.tarragon,
                description: "Aromatic and licorice herb.",
                packaging:
                  "Packaged in sleeves for retail customers or in boxes for wholesale customers. Available in 100g, 50g, and 20g packets.",
              })
            }
          >
            <img
              src={images.tarragon}
              alt="Fresh Tarragon"
            />
            <h3>Tarragon</h3>
            <p>Aromatic and licorice.</p>
          </div>
        </div>
        {selectedHerb && (
          <HerbModal
            herb={selectedHerb}
            onClose={closeModal}
          />
        )}
        {/* New Catalog CTA */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          {" "}
          {/* Basic styling for centering */}
            <Link
              to="/contact"
              className="btn btn-secondary"
            >
              {t('readMore')}
            </Link>
        </div>
      </section>

      {/* New Placeholder Section for Testimonials/Logos */}
      <section
        id="testimonials"
        className="testimonials-section"
      >
        <h2> Our Clients: </h2>
        <p style={{ textAlign: "center", margin: "1rem 0" }}>
          We are proud to partner with some of the most reputable brands in the
          industry. Our commitment to quality and sustainability has earned us
          the trust of clients across the industry. Here are a few of the
          esteemed organizations we work with:
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.0rem",
            margin: "1rem 0",
            marginLeft: "3rem",
          }}
        >
          <img
            src={images.spisalogo}
            sizes="130px"
            srcSet={`${images.spisalogo} 3x, ${images.spisalogo} 2x`}
            alt="Spisa"
            style={{ maxWidth: "130px" }}
          />
          <img
            src={images.tasteKenyaLogo}
            sizes="130px"
            srcSet={`${images.tasteKenyaLogo} 3x, ${images.tasteKenyaLogo} 2x`}
            alt="Taste Kenya"
            style={{ maxWidth: "130px" }}
          />
          <img
            src={images.feelKenyaLogo}
            sizes="100px"
            srcSet={`${images.feelKenyaLogo} 3x, ${images.feelKenyaLogo} 2x`}
            alt="Feel Kenya"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </section>

      <section
        id="about"
        className="about-teaser"
      >
        <h2>About Greentwiste Exporters</h2>
        {/* Updated Teaser Text */}

        <p style={{ textAlign: "center" }}>
          Leveraging decades of experience, we provide consistently high-quality
          herbs through rigorous selection and ethical sourcing.Our mission is
          to deliver premium, traceable herbs from farm to table, ensuring
          complete transparency and customer satisfaction. By partnering with
          smallholder farmers committed to sustainable agriculture, we support
          local communities and protect the environment.
        </p>
        <ul>
          <p>
            <strong>Rigorous Quality Control:</strong> From harvest to export,
            every batch undergoes strict testing for purity and flavor.
          </p>
          <p>
            <strong>Global Distribution:</strong> Reliable logistics network
            serving markets in Europe, and Middle East.
          </p>
          <p>
            <strong>Customized Solutions:</strong> Flexible packaging and
            private-label options tailored to your brand's needs.
          </p>
        </ul>
        <p>
          Contact us to learn how our sustainable herb exports can elevate your
          product offerings, enhance your supply chain, and drive long-term
          growth.
        </p>
        {/* Updated CTA Text */}
        <Link
          to="/about"
          className="btn btn-secondary"
        >
          Discover Our Sourcing Story
        </Link>
      </section>

      <section
        id="sustainability"
        className="sustainability-section"
      >
        <h2>Committed to Sustainability</h2>
        {/* Updated Teaser Text */}
        <p>
          Our commitment goes beyond freshness; we use eco-friendly packaging
          and sustainable farming to protect the planet while delivering
          nature's best.
        </p>
        {/* Updated CTA Text */}
        <Link
          to="/sustainability"
          className="btn btn-secondary"
        >
          See Our Sustainable Practices
        </Link>
      </section>

      {/* New Placeholder Section for Certifications */}
      <section
        id="certifications"
        className="certifications-section"
      >
        <h2>Our Certifications & Standards</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.0rem",
            margin: "1rem 0",
            marginLeft: "2rem",
          }}
        >
          <img
            src={images.kephisLogo}
            sizes="200px"
            srcSet={`${images.kephisLogo} 3x, ${images.kephisLogo} 2x`}
            alt="Kephis"
          style={{ maxWidth: "150px" }}
          />
          <img
            src={images.afaLogo}
            sizes="200px"
            srcSet={`${images.afaLogo} 3x, ${images.afaLogo} 2x`}
            alt="Afa HCD"
            style={{ maxWidth: "150px" }}
          />
          <img
            src={images.madeInKenyaLogo}
            sizes="200px"
            srcSet={`${images.madeInKenyaLogo} 3x, ${images.madeInKenyaLogo} 2x`}
            alt="Made in Kenya"
            style={{ maxWidth: "150px" }}
          />
        </div>
      </section>

      {/* Recommendation: Consider extracting the Footer into its own reusable component */}
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
      {/* Removed script tags. These should be handled globally (e.g., in index.html or via useEffect in App.js) */}
      {/* <script src="js/scripts.js"></script> */}
      {/* <script src="js/tawk.js"></script> */}
      {/* <script src="js/scrollup.js"></script> */}
      {/* <script src="js/hamburger.js"></script> */}
    </div>
  );
}

export default Home;
