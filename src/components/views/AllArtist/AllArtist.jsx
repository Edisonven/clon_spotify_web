import "../AllArtist/allartist.css";
import PrincipalArtistsCards from "../../PrincipalArtistsCards/PrincipalArtistsCards";
import { useContext, useEffect } from "react";
import { ArtistContext } from "../../contexts/ArtistContext";
import ArtistCard from "../../ArtistCard/ArtistCard";
import { IoIosPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import PrincipalFooter from "../../PrincipalFooter/PrincipalFooter";
import PrincipalLinks from "../../PrincipalLinks/PrincipalLinks";

const AllArtist = () => {
  const { artistData, openArtistModal } = useContext(ArtistContext);
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
          <PrincipalArtistsCards className="principal__artistcard__cards__container allartist__artistcard__cards__container">
            {artistData?.map((artist) => {
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
          </PrincipalArtistsCards>
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

export default AllArtist;
