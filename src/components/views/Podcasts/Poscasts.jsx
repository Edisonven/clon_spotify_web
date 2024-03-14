import { useContext } from "react";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../Podcasts/podcasts.css";
import { PodcastsContext } from "../../contexts/PodcastsContext";

const Podcasts = () => {
  const { podcastsData } = useContext(PodcastsContext);

  return (
    <section className="principal__podcasts">
      <PrincipalNavbar className="principal__podcasts__nav" />
      <div className="principal__podcasts__section">
        <div className="principal__podcasts__title__container">
          <h1 className="principal__podcasts__title">Podcasts</h1>
        </div>
        <div className="principal__podcasts__container">
          <h1 className="principal__podcasts__section__title">Categorías</h1>
          <div className="principal__podcasts__body__section">
            {podcastsData?.map((podcast) => {
              return (
                <div
                  key={podcast.id}
                  style={{ background: podcast.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">{podcast.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
