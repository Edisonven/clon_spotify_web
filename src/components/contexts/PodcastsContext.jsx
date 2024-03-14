import { createContext, useEffect, useState } from "react";

export const PodcastsContext = createContext();

const PodcastsUrl = "/podcasts.json";

const PodcastsProvider = ({ children }) => {
  const [podcastsData, setPodcastsData] = useState([]);

  const getPodcastsData = async () => {
    const respuesta = await fetch(PodcastsUrl);
    const data = await respuesta.json();
    setPodcastsData(data);
  };

  useEffect(() => {
    getPodcastsData();
  }, []);

  return (
    <PodcastsContext.Provider value={{ podcastsData, setPodcastsData }}>
      {children}
    </PodcastsContext.Provider>
  );
};

export default PodcastsProvider;
