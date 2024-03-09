import { Link } from "react-router-dom";
import "../Principal/principal.css/";
import { useContext, useEffect } from "react";
import { ArtistContext } from "../contexts/ArtistContext";
import PrincipalFooter from "../PrincipalFooter/PrincipalFooter";
import PrincipalLinks from "../PrincipalLinks/PrincipalLinks";
import PrincipalNavbar from "../PrincipalNavbar/PrincipalNavbar";
import PrincipalArtistsCards from "../PrincipalArtistsCards/PrincipalArtistsCards";
import { IoIosPlay } from "react-icons/io";
import ArtistCard from "../ArtistCard/ArtistCard";

const Principal = () => {
  const { artistData, openArtistModal, applyHoverEffects } =
    useContext(ArtistContext);
  const filteredArtists = [...artistData].slice(0, 7);

  useEffect(() => {
    applyHoverEffects();
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
          </PrincipalArtistsCards>
        </section>
        <PrincipalLinks />
      </section>
      <PrincipalFooter />
    </section>
  );
};

export default Principal;
