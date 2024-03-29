import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ValidationProvider from "./components/contexts/ValidationContext.jsx";
import ArtistProvider from "./components/contexts/ArtistContext.jsx";
import PodcastsProvider from "./components/contexts/PodcastsContext.jsx";
import SearchProvider from "./components/contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ValidationProvider>
        <ArtistProvider>
          <PodcastsProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </PodcastsProvider>
        </ArtistProvider>
      </ValidationProvider>
    </React.StrictMode>
  </BrowserRouter>
);
