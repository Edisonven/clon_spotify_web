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
          <div className="allpodcasts__section allpodcasts__first__section">
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
          <h1 className="allpodcasts__section__body__title allpodcasts__second__section__title">
            Arte y entretenimiento
          </h1>
          <div className="allpodcasts__section allpodcasts__second__section">
            {[...allPodcastsData].slice(2, 13).map((secondSection) => {
              return (
                <PodcastsCard
                  key={secondSection.id}
                  style={{ background: secondSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {secondSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={secondSection.url}
                    alt=""
                  />
                </PodcastsCard>
              );
            })}
          </div>
          <h1 className="allpodcasts__section__body__title allpodcasts__third__section__title">
            Crímenes reales
          </h1>
          <div className="allpodcasts__section allpodcasts__third__section">
            {[...allPodcastsData].slice(13, 14).map((thirdSection) => {
              return (
                <PodcastsCard
                  key={thirdSection.id}
                  style={{ background: thirdSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {thirdSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={thirdSection.url}
                    alt=""
                  />
                </PodcastsCard>
              );
            })}
          </div>
          <h1 className="allpodcasts__section__body__title allpodcasts__four__section__title">
            Deportes y recreación
          </h1>
          <div className="allpodcasts__section allpodcasts__four__section">
            {[...allPodcastsData].slice(14, 27).map((fourSection) => {
              return (
                <PodcastsCard
                  key={fourSection.id}
                  style={{ background: fourSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {fourSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={fourSection.url}
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
