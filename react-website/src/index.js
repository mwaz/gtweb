import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "./css/index.css";
import "./css/about.css";
import "./css/blog-template.css";
import "./css/blog.css";
import "./css/contact.css";
import "./css/footer.css";
import "./css/hamburger.css";
import "./css/media-queries.css";
import "./css/sustainability.css";
import "./css/herb-modal.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1TXDZFCHTN"></script>
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
      <script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3782236.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
        window.amplitude.init("6678e96614b9ea642258f87eddbcce21", { autocapture: { elementInteractions: true } });
          `,
        }}
      />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
