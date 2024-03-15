import { useContext } from "react";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../AllPodcasts/allpodcasts.css";
import { PodcastsContext } from "../../contexts/PodcastsContext";
import PodcastsCard from "../Podcasts/PodcastsCard/PodcastsCard";

const AllPodcasts = () => {
  const { allPodcastsData } = useContext(PodcastsContext);

  return (
    <section className="allpodcasts__container">
      <PrincipalNavbar className="allpodcasts__nav">
        <h1 className="allpodcasts__nav__title" scroll-anim="move">
          Todas las categorías de podcasts
        </h1>
      </PrincipalNavbar>
      <section className="allpodcasts__section__container">
        <div className="allpodcasts__section__title__container">
          <h1 className="allpodcasts__section__title">
            Todas las categorías de podcasts
          </h1>
        </div>
        <div className="allpodcasts__section__body">
          <h1 className="allpodcasts__section__body__title allpodcasts__first__section__title">
            Actualidad y política
          </h1>
          <div className="allpodcasts__first__section">
            {[...allPodcastsData].slice(0, 2).map((firstSection) => {
              return (
                <PodcastsCard
                  key={firstSection.id}
                  style={{ background: firstSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {firstSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={firstSection.url}
                    alt=""
                  />
                </PodcastsCard>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AllPodcasts;
