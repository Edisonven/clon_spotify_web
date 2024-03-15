import { useContext, useEffect } from "react";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../Podcasts/podcasts.css";
import { PodcastsContext } from "../../contexts/PodcastsContext";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import PrincipalLinks from "../../PrincipalLinks/PrincipalLinks";
import PrincipalFooter from "../../PrincipalFooter/PrincipalFooter";
import PodcastsCard from "./PodcastsCard/PodcastsCard";

const Podcasts = () => {
  const { podcastsData } = useContext(PodcastsContext);

  useEffect(() => {
    const podcastSection = document.querySelector(".principal__podcasts");

    const scrollDownNav = () => {
      const podcastNav = document.querySelector(".principal__podcasts__nav");
      const podcastNavTitle = document.querySelector(
        ".principal__podcasts__nav__title"
      );
      podcastNav.classList.toggle("revertNav", podcastSection.scrollTop > 190);
      podcastNavTitle.classList.toggle(
        "revertNavTitle",
        podcastSection.scrollTop > 190
      );
    };

    podcastSection.addEventListener("scroll", scrollDownNav);
  }, []);

  return (
    <section className="principal__podcasts">
      <PrincipalNavbar className="principal__podcasts__nav">
        <h1 className="principal__podcasts__nav__title" scroll-anim="move">
          Podcasts
        </h1>
      </PrincipalNavbar>
      <div className="principal__podcasts__section">
        <div className="principal__podcasts__title__container">
          <h1 className="principal__podcasts__title">Podcasts</h1>
        </div>
        <div className="principal__podcasts__container">
          <h1 className="principal__podcasts__section__title">Categorías</h1>
          <div className="principal__podcasts__body__section">
            {podcastsData?.map((podcast) => {
              return (
                <PodcastsCard
                  key={podcast.id}
                  style={{ background: podcast.color }}
                  className="principal__podcast__body"
                >
                  <h1 className="principal__podcast__title">{podcast.name}</h1>
                  <img
                    className="principal__podcast__img"
                    src={podcast.url}
                    alt=""
                  />
                </PodcastsCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className="principal__podcasts__footer__section">
        <div className="principal__podcasts__link__container">
          <Link to="/podcasts/allpodcasts" className="principal__podcast__link">
            Ver todas las categorias
            <IoIosArrowForward className="principal__podcasts__link__icon" />
          </Link>
        </div>
        <PrincipalLinks className="principal__podcasts__links__section" />
      </div>
      <PrincipalFooter />
    </section>
  );
};

export default Podcasts;
