import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Rohit.dev/">
      {" "}
      {/* Set the base path */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
