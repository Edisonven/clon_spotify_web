import { createContext, useEffect, useState } from "react";

export const PodcastsContext = createContext();

const PodcastsUrl = "/podcasts.json";
const AllPodcastsUrl = "/allPodcasts.json";

const PodcastsProvider = ({ children }) => {
  const [podcastsData, setPodcastsData] = useState([]);
  const [allPodcastsData, setallPodcastsData] = useState([]);

  const getPodcastsData = async () => {
    const respuesta = await fetch(PodcastsUrl);
    const data = await respuesta.json();
    setPodcastsData(data);
  };

  const getAllPodcastsData = async () => {
    const respuesta = await fetch(AllPodcastsUrl);
    const data = await respuesta.json();
    setallPodcastsData(data);
  };

  useEffect(() => {
    getPodcastsData();
    getAllPodcastsData();
  }, []);

  return (
    <PodcastsContext.Provider
      value={{
        podcastsData,
        setPodcastsData,
        allPodcastsData,
        setallPodcastsData,
      }}
    >
      {children}
    </PodcastsContext.Provider>
  );
};

export default PodcastsProvider;
