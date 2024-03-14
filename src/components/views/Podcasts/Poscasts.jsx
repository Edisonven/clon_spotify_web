import { useContext } from "react";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../Podcasts/podcasts.css";
import { PodcastsContext } from "../../contexts/PodcastsContext";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import PrincipalLinks from "../../PrincipalLinks/PrincipalLinks";
import PrincipalFooter from "../../PrincipalFooter/PrincipalFooter";

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
                  <img
                    className="principal__podcast__img"
                    src={podcast.url}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="principal__podcasts__footer__section">
        <div className="principal__podcasts__link__container">
          <Link className="principal__podcast__link">
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
