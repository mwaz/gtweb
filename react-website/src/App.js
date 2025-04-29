import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Sustainability from "./components/Sustainability";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <Helmet>
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Greentwiste Growers and Exporters",
            "url": "https://www.greentwisteexporters.com",
            "logo": "https://www.greentwiste.com/logo.png",
            "sameAs": [
              "https://x.com/GreenTwiste",
              "https://instagram.com/greentwiste"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254-702-449-450",
              "contactType": "Customer Service",
              "availableLanguage": "English"
            },
            "description": "Greentwiste Growers and Exporters provides fresh herbs through sustainable farming and eco-friendly packaging in Kenya."
          }`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1TXDZFCHTN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-1TXDZFCHTN");
            `,
          }}
        />
        <script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/3782236.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/gpp/stub.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charset="UTF-8"
          async
        ></script>
        <script src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"></script>
        <script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz"></script>
      </Helmet>
      <Routes key="routes">
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/sustainability"
          element={<Sustainability />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/blog/:postId"
          element={<BlogPost />}
        />
      </Routes>
    </Router>
  );
}

export default App;
