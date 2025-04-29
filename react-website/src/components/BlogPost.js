import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../blog-posts";
import images from "../js/images";

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((post) => post.slug === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post-container">
      <header className="blog-header">
        <div className="blog-header-content">
          <Link to="/" className="blog-logo-link">
            <img src={images.logo} alt="Greentwiste Logo" className="blog-logo-img" />
          </Link>
          <span className="blog-header-title">Greentwiste Growers and Exporters</span>
          <nav className="blog-header-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className="main-content-area">
        <div className="container">
          <div className="post-meta">
            <span className="category">GROWING TIPS</span> |{" "}
            <span className="date">SEPTEMBER 10, 2024</span> |{" "}
            <span className="read-time">8 MIN READ</span>
          </div>

          <h1 className="post-title">{post.title}</h1>

          <div className="author-info">By Jane Doe, Lead Agronomist</div>

          <aside className="social-share">
            <a href="#" aria-label="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Share on Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Share on Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Copy link"><i className="fas fa-link"></i></a>
            <a href="#" aria-label="Share via Email"><i className="fas fa-envelope"></i></a>
          </aside>

          <div className="featured-image">
            <img src={images.oregano} alt="Descriptive alt text for the featured oregano" />
          </div>

          <div className="content-wrapper">
            <article className="post-content">
              <p>{post.content}</p>
            </article>

            <aside className="table-of-contents">
              <h3>This Post Covers:</h3>
              <ul>
                <li><a href="#section1">Section 1: The Foundation</a></li>
                <li><a href="#section2">Section 2: Deeper Dive</a></li>
                <li><a href="#subsection2-1">Subsection Example</a></li>
                <li><a href="#section3">Section 3: Bringing it Together</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </main>

      <footer className="blog-footer">
        <div className="container">
          <p>© 2024 Greentwiste Growers and Exporters. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default BlogPost;
