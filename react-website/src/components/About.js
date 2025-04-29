import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import images from "../js/images";

function About() {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Learn about Greentwiste Exporters, your trusted source for premium, sustainably-sourced herbs from Kenya. Discover our commitment to quality and ethical practices."
        />
        <meta
          name="keywords"
          content="herbs exporter, sustainable herbs, ethical sourcing, Kenya herbs, responsible farming"
        />
        <meta
          name="author"
          content="Greentwiste Growers and Exporters"
        />
        <title>
          About Us - Greentwiste Exporters | Sustainable Herbs from Kenya
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="about-main container">
        <h1>About Greentwiste Exporters</h1>
        <p>
          At <strong>Greentwiste Exporters</strong>, we are committed to
          providing the highest quality herbs while upholding our responsibility
          to the environment and local communities in Kenya.
        </p>

        <div className="about-mission-section">
          <h2>Our Mission</h2>
          <p>
            We aim to deliver fresh, high-quality herbs while ensuring ethical
            sourcing and sustainable practices throughout our supply chain. We
            believe in a future where our business contributes positively to
            society and the planet.
          </p>
        </div>

        <div className="about-ethical-sourcing-section">
          <h2>Ethical Sourcing & Responsible Farming</h2>
          <p>
            We work directly with local farmers to ensure fair labor practices
            and environmentally sustainable farming techniques. Our farming
            methods minimize our impact on the planet, ensuring that the herbs
            you enjoy come from responsible sources.
          </p>

          <h3>Sustainable Farming Practices</h3>
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

        <div className="about-packaging-section">
          <h2>Eco-Friendly Packaging</h2>
          <p>
            We use <strong>biodegradable packaging materials</strong>
            that minimize waste, reduce the use of plastic, and ensure the herbs
            remain fresh and flavorful during transportation.
          </p>

          <p>
            Join us on our journey to protect the planet and empower
            communities.
            <strong>
              Learn more about how we are making a difference, one herb at a
              time.
            </strong>
          </p>
        </div>

        <div className="about-brands-section">
          <h2>Our Trusted Brands</h2>
          <section
            id="products"
            className="featured-products"
          >
            <h2>Our Trusted Brands</h2>
            <div className="products-grid">
              <div className="product-card">
                <img
                  src={images.fruitTwisteLogo}
                  alt="Fruit Twiste"
                />
                <h3>Fruit Twiste</h3>
                <p>All about fresh fruits</p>
              </div>
              <div className="product-card">
                <img
                  src={images.herbTwisteLogo}
                  alt="Herb Twiste"
                />
                <h3>Herb Twiste</h3>
                <p>All about our fresh herbs</p>
              </div>
              <div className="product-card">
                <img
                  src={images.greenTwisteLogo}
                  alt="Green Twiste"
                />
                <h3>Green Twiste Farms</h3>
                <p>Our Production magic</p>
              </div>
            </div>
          </section>
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
      <script src="js/scripts.js"></script>
      <script src="js/tawk.js"></script>
      <script src="js/hamburger.js"></script>
    </div>
  );
}

export default About;
