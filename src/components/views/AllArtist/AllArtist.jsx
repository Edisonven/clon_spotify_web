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
  const { artistData, openArtistModal, applyHoverEffects } =
    useContext(ArtistContext);

  useEffect(() => {
    applyHoverEffects();
  }, [artistData]);

  return (
    <section className="principal__container allartist">
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
      <PrincipalFooter />
    </section>
  );
};

export default AllArtist;
