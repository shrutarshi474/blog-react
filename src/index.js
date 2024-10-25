// src/index.js

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Remove or comment this out
// import reportWebVitals from './reportWebVitals';

// Render your app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you don't need it, remove this call too
// reportWebVitals();
