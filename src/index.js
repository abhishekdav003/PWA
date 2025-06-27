import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Register the service worker for PWA functionality
// This enables offline functionality and faster loading
serviceWorkerRegistration.register({
  onSuccess: (registration) => {
    console.log("Service Worker registered successfully:", registration);
  },
  onUpdate: (registration) => {
    console.log("Service Worker updated:", registration);
    // You can add logic here to prompt user to refresh for updates
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
