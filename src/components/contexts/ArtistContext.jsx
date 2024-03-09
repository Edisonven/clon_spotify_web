import { createContext, useEffect, useState } from "react";

export const ArtistContext = createContext();

const artistJs = "/artists.json";

const ArtistProvider = ({ children }) => {
  const [artistData, setArtistData] = useState([]);
  const [artistModal, setArtistModal] = useState(false);

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

  const applyHoverEffects = () => {
    const cardOnHover = document.querySelectorAll(".artistcard__card");

    cardOnHover.forEach((card) => {
      const icon = card.querySelector(".artistcard__play__icon");

      const handleMouseEnter = () => {
        card.classList.add("inverse");
        if (icon) {
          icon.classList.add("inverse");
        }
      };

      const handleMouseLeave = () => {
        card.classList.remove("inverse");
        if (icon) {
          icon.classList.remove("inverse");
        }
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
  };

  return (
    <ArtistContext.Provider
      value={{
        artistData,
        setArtistData,
        artistModal,
        setArtistModal,
        openArtistModal,
        applyHoverEffects,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistProvider;
