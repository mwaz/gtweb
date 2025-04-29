import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import images from "../js/images";
import { blogPosts } from "../blog-posts";

function Blog() {
  const { t } = useTranslation();
  const [shuffledPosts, setShuffledPosts] = useState([...blogPosts]);

  const shufflePosts = () => {
    const shuffled = [...shuffledPosts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledPosts([...shuffled]);
  };

  useEffect(() => {
    shufflePosts();
  }, []);

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Read the latest articles about herbs, sustainable farming, and Greentwiste Exporters. Stay informed about our practices and products."
        />
        <meta
          name="keywords"
          content="herbs blog, sustainable farming, Greentwiste Exporters, herb articles, Kenya herbs"
        />
        <meta
          name="author"
          content="Greentwiste Growers and Exporters"
        />
        <title>
          Blog - Greentwiste Exporters | Sustainable Herbs and Farming
        </title>
      </Helmet>
      <header className="blog-header">
        <div className="blog-header-content">
          <Link
            to="/"
            className="blog-logo-link"
          >
            <img
              src={images.logo}
              alt="Greentwiste Logo"
              className="blog-logo-img"
            />
          </Link>
          <span className="blog-header-title">
            Greentwiste Growers and Exporters
          </span>
          <nav className="blog-header-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>
      <div className="blog-page-container">
        <main className="blog-main-content">
          <section className="blog-section featured-post-section">
            <div className="section-header">
              <h2>{t('featuredPost')}</h2>
            </div>
            <div id="featured-post-container">
              <Link to={`/blog/${shuffledPosts[0].slug}`}>
                <img
                  src={images.oregano}
                  alt={shuffledPosts[0].title}
                />
                <h3>{shuffledPosts[0].title}</h3>
              </Link>
            </div>
          </section>

          <section className="blog-section recent-posts-section">
            <div className="section-header">
              <h2>{t('recentPosts')}</h2>
              <a
                href="#"
                className="see-all-link"
              >
                See all &rarr;
              </a>
            </div>
            <div
              id="recent-posts-container"
              className="post-list"
            >
              {shuffledPosts.map((post) => (
                <div
                  key={post.slug}
                  className="recent-post-item"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={images.oregano}
                      alt={post.title}
                    />
                    <h4>{post.title}</h4>
                  </Link>
                </div>
              ))}
            </div>
          </section>
          <button onClick={shufflePosts}>Shuffle Posts</button>
        </main>

        <aside className="blog-sidebar">
          <section className="sidebar-section">
            <div className="section-header">
              <h2>Greentwiste News</h2>
              <a
                href="#"
                className="see-all-link"
              >
                See all &rarr;
              </a>
            </div>
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <img
                  src={images.logoGB}
                  alt="News 1"
                />
                <div>
                  <a href="#">New Herb Varieties Available</a>
                  <span className="read-time">5 MIN READ</span>
                </div>
              </li>
              <li className="sidebar-item">
                <img
                  src={images.greenTwisteLogo}
                  alt="News 2"
                />
                <div>
                  <a href="#">Sustainable Farming Initiatives Update</a>
                  <span className="read-time">7 MIN READ</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="sidebar-section">
            <div className="section-header">
              <h2>Herb Productivity</h2>
              <a
                href="#"
                className="see-all-link"
              >
                See all &rarr;
              </a>
            </div>
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <img
                  src={images.thyme}
                  alt="Productivity 1"
                />
                <div>
                  <a href="#">Best Herbs for Focus</a>
                  <span className="read-time">6 MIN READ</span>
                </div>
              </li>
              <li className="sidebar-item">
                <img
                  src={images.oregano}
                  alt="Productivity 2"
                />
                <div>
                  <a href="#">Herbs to Boost Your Mood Naturally</a>
                  <span className="read-time">8 MIN READ</span>
                </div>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default Blog;
