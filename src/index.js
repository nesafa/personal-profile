import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // pastikan path benar
import "./index.css";      // jika ada CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
