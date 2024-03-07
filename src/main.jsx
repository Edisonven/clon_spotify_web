import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ValidationProvider from "./components/contexts/ValidationContext.jsx";
import ArtistProvider from "./components/contexts/ArtistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ValidationProvider>
        <ArtistProvider>
          <App />
        </ArtistProvider>
      </ValidationProvider>
    </React.StrictMode>
  </BrowserRouter>
);
