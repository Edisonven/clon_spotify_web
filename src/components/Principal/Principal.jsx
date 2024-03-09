import { Link } from "react-router-dom";
import "../Principal/principal.css/";
import ArtistCard from "../ArtistCard/ArtistCard";
import { useContext, useEffect } from "react";
import { ArtistContext } from "../contexts/ArtistContext";
import { IoIosPlay } from "react-icons/io";

import PrincipalFooter from "../PrincipalFooter/PrincipalFooter";
import PrincipalLinks from "../PrincipalLinks/PrincipalLinks";
import PrincipalNavbar from "../PrincipalNavbar/PrincipalNavbar";

const Principal = ({ fullArray = false }) => {
  const { artistData, openArtistModal } = useContext(ArtistContext);
  const filteredArtists = fullArray ? artistData : [...artistData].slice(0, 7);

  useEffect(() => {
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
  }, [artistData]);

  return (
    <section className="principal__container">
      <PrincipalNavbar />
      <section className="principal__body__container allartist__body__container">
        <div className="principal__body__title__section">
          <Link to="/all_artists" className="principal__body__title">
            Artistas Populares
          </Link>
          <Link to="/all_artists" className="principal__body__showmore">
            Mostrar todo
          </Link>
        </div>
        <section className="principal__artist__section">
          <div className="principal__artistcard__cards__container allartist__artistcard__cards__container">
            {filteredArtists?.map((artist) => {
              return (
                <ArtistCard key={artist.id} className="artistcard__card">
                  <img className="artistcard__img" src={artist.src} alt="" />
                  <h1 className="artistcard__name">{artist.name}</h1>
                  <p className="artistcard__desc">{artist.desc}</p>
                  <IoIosPlay
                    onClick={() => openArtistModal(artist)}
                    className="artistcard__play__icon"
                  />
                </ArtistCard>
              );
            })}
          </div>
        </section>
        <PrincipalLinks />
      </section>
      <hr className="principal__footer__divisor allartist" />
      <PrincipalFooter className="principal__footer__section allartist__footer__section">
        <h5 className="principal__footer__section__title">© 2024 Spotify AB</h5>
      </PrincipalFooter>
    </section>
  );
};

export default Principal;
