import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from "react-i18next";
import images from "../js/images";

function Sustainability() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Discover Greentwiste Exporters' commitment to sustainability. Learn about our eco-friendly farming and packaging practices in Kenya."
        />
        <meta
          name="keywords"
          content="sustainable herbs, eco-friendly, Kenya herbs, responsible farming, green packaging"
        />
        <meta
          name="author"
          content="Greentwiste Growers and Exporters"
        />
        <title>
          {t('sustainability')} - Greentwiste Exporters | Eco-Friendly Herbs from Kenya
        </title>
      </Helmet>
      <header className="header">
        <div className="logo">
          <img
            src={images.logo}
            alt="Greentwiste Exporters Logo"
          />
          <span>Greentwiste Growers and Exporters </span>
          <span> Phone: +254702449450 </span>
          <span> Email: info@greentwisteexporters.com </span>
        </div>
        <nav className="nav">
          <a
            href="javascript:void(0);"
            className="icon"
            onclick="myFunction()"
          >
            <div
              id="hamburger"
              className="hamburger"
            >
              &#9776;
            </div>
          </a>

          <ul
            id="menu"
            className="nav-list"
          >
            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            <li>
              <Link to="/about">{t('about')}</Link>
            </li>
            <li>
              <Link to="/">{t('products')}</Link>
            </li>
            <li>
              <Link to="/sustainability">{t('sustainability')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('contact')}</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="sustainability-details">
        <div className="container">
          <h1>{t('sustainability')}</h1>
          <p>
            At <strong>Greentwiste Growers and Exporters</strong>, located in
            Kenya, sustainability is not just a practice; it’s a way of life. We
            believe in protecting the environment while providing the freshest,
            highest-quality herbs. Our sustainable farming practices and
            eco-friendly packaging ensure that we deliver fresh herbs
            responsibly, while minimizing our environmental footprint.
          </p>

          <div className="sustainability-section">
            <h2>Sustainable Farming Practices</h2>
            <p>
              Our farms are designed with sustainability in mind. We employ a
              range of environmentally friendly techniques to ensure that we
              protect the soil, conserve water, and preserve biodiversity.
            </p>

            <ul>
              <li>
                <strong>Water Conservation:</strong> Advanced irrigation systems,
                such as drip irrigation, allow us to use water efficiently,
                reducing waste and supporting local ecosystems.
              </li>
              <li>
                <strong>Crop Diversity:</strong> We practice crop rotation and
                grow a variety of herbs to maintain soil health and protect
                biodiversity.
              </li>
              <li>
                <strong>Renewable Energy:</strong> Our farms are gradually
                shifting toward renewable energy sources, such as solar power, to
                reduce our reliance on fossil fuels and lower carbon emissions.
              </li>
            </ul>
          </div>

          <div className="eco-friendly-packaging">
            <h2>Eco-Friendly Packaging</h2>
            <p>
              We take great care in ensuring that our packaging is as green as
              possible. Our packaging materials are carefully chosen to reduce
              waste while keeping our herbs fresh.
            </p>

            <ul>
              <li>
                <strong>Biodegradable Packaging:</strong> Our herbs are packed
                in biodegradable materials, made from plant-based sources like
                cornstarch, which decompose naturally.
              </li>
              <li>
                <strong>Minimal Plastic Usage:</strong> Wherever possible, we
                minimize the use of plastic, and ensure any plastic used is
                fully recyclable.
              </li>
              <li>
                <strong>Compostable Labels:</strong> We use labels made from
                recycled paper and printed with eco-friendly inks, so they can
                easily be composted or recycled.
              </li>
            </ul>
          </div>

          <p>
            Together, these practices allow us to deliver the freshest, most
            flavorful herbs while protecting the planet for future generations.
            By choosing Greentwiste Exporters, you're not only getting
            top-quality herbs, but you're also supporting a business that
            prioritizes sustainability in every aspect of its operation.
          </p>

          <Link
            to="/"
            className="btn btn-primary"
          >
            {t('products')}
          </Link>
        </div>
      </section>

      <button
        id="backToTopBtn"
        title="Back to top"
      >
        Top
      </button>

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
      <script src="js/tawk.js"></script>
      <script src="js/scrollup.js"></script>
      <script src="js/hamburger.js"></script>
    </div>
  );
}

export default Sustainability;
