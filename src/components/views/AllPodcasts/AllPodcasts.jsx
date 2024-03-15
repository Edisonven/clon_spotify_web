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
          <h1 className="allpodcasts__section__body__title allpodcasts__five__section__title">
            Educación
          </h1>
          <div className="allpodcasts__section allpodcasts__five__section">
            {[...allPodcastsData].slice(27, 33).map((fiveSection) => {
              return (
                <PodcastsCard
                  key={fiveSection.id}
                  style={{ background: fiveSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {fiveSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={fiveSection.url}
                    alt=""
                  />
                </PodcastsCard>
              );
            })}
          </div>
          <h1 className="allpodcasts__section__body__title allpodcasts__six__section__title">
            Juegos
          </h1>
          <div className="allpodcasts__section allpodcasts__six__section">
            {[...allPodcastsData].slice(33, 35).map((sixSection) => {
              return (
                <PodcastsCard
                  key={sixSection.id}
                  style={{ background: sixSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {sixSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={sixSection.url}
                    alt=""
                  />
                </PodcastsCard>
              );
            })}
          </div>
          <h1 className="allpodcasts__section__body__title allpodcasts__seven__section__title">
            Negocios y tecnología
          </h1>
          <div className="allpodcasts__section allpodcasts__seven__section">
            {[...allPodcastsData].slice(35, 42).map((sevenSection) => {
              return (
                <PodcastsCard
                  key={sevenSection.id}
                  style={{ background: sevenSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {sevenSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={sevenSection.url}
                    alt=""
                  />
                </PodcastsCard>
              );
            })}
          </div>
          <h1 className="allpodcasts__section__body__title allpodcasts__eight__section__title">
            Salud y estilo de vida
          </h1>
          <div className="allpodcasts__section allpodcasts__eight__section">
            {[...allPodcastsData].slice(42).map((eightSection) => {
              return (
                <PodcastsCard
                  key={eightSection.id}
                  style={{ background: eightSection.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">
                    {eightSection.name}
                  </h1>
                  <img
                    className="principal__podcast__img"
                    src={eightSection.url}
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
