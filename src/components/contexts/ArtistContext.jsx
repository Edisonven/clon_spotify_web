import { createContext, useEffect, useState } from "react";

export const ArtistContext = createContext();

const artistJs = "/src/components/ArtistCard/artists.json";

const ArtistProvider = ({ children }) => {
  const [artistData, setArtistData] = useState([]);

  const getArtistData = async () => {
    const response = await fetch(artistJs);
    const data = await response.json();
    setArtistData(data);
  };

  useEffect(() => {
    getArtistData();
  }, []);

  return (
    <ArtistContext.Provider value={{ artistData, setArtistData }}>
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistProvider;
