import { createContext, useEffect, useState } from "react";

export const ArtistContext = createContext();

const artistJs = "/artists.json";

const ArtistProvider = ({ children }) => {
  const [artistData, setArtistData] = useState([]);
  const [artistModal, setArtistModal] = useState([]);

  const getArtistData = async () => {
    const response = await fetch(artistJs);
    const data = await response.json();
    setArtistData(data);
  };

  useEffect(() => {
    getArtistData();
  }, []);

  const openArtistModal = (artist) => {
    const newData = [...artistData].find((a) => a.id === artist.id);
    if (newData) {
      setArtistModal(newData);
    }
    return;
  };

  return (
    <ArtistContext.Provider
      value={{
        artistData,
        setArtistData,
        artistModal,
        setArtistModal,
        openArtistModal,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistProvider;
