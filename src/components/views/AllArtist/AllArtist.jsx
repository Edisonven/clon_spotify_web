import "../AllArtist/allartist.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../../Button/Button";
import ArtistCard from "../../ArtistCard/ArtistCard";
import { useContext, useEffect } from "react";
import { ArtistContext } from "../../contexts/ArtistContext";
import { IoIosPlay } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const AllArtist = () => {
  const navigate = useNavigate();

  const NavigateToSingUp = () => {
    navigate("/singup");
  };

  const { artistData } = useContext(ArtistContext);

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
    <section className="allartist__container">
      <nav className="allartist__navbar">
        <div className="allartist__navbar__icons">
          <IoIosArrowBack className="allartist__navbar__icon" />
          <IoIosArrowForward className="allartist__navbar__icon" />
        </div>
        <div className="allartist__register__section">
          <div className="allartist__navbar__links">
            <Link className="allartist__navbar__link">Premium</Link>
            <Link className="allartist__navbar__link">Ayuda</Link>
            <Link className="allartist__navbar__link">Descargar</Link>
          </div>
          <span className="allartist__navbar__divisor">'</span>
          <div className="allartist__navbar__register">
            <Link to="/register" className="allartist__navbar__link__register">
              Regístrate
            </Link>
            <Button
              onClick={NavigateToSingUp}
              className="btn allartist__navbar__btn"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </nav>
      <section className="allartist__body__container">
        <div className="allartist__body__title__section">
          <h1 className="allartist__body__title">Artistas Populares</h1>
        </div>
        <section className="allartist__artist__section">
          <div className="artistcard__cards__container">
            {artistData?.map((artist) => {
              return (
                <ArtistCard key={artist.id} className="artistcard__card">
                  <img className="artistcard__img" src={artist.src} alt="" />
                  <h1 className="artistcard__name">{artist.name}</h1>
                  <p className="artistcard__desc">{artist.desc}</p>
                  <IoIosPlay className="artistcard__play__icon" />
                </ArtistCard>
              );
            })}
          </div>
        </section>
        <section className="allartist__links__section__container">
          <div className="allartist__links__conatiner">
            <div className="allartist__links__section allartist__links__first__section">
              <h1 className="allartist__links__title allartist__links__first__section__title">
                Compañía
              </h1>
              <NavLink className="allartist__link allartist__link__first__section">
                Acerca de
              </NavLink>
              <NavLink className="allartist__link allartist__link__first__section">
                Empleo
              </NavLink>
              <NavLink className="allartist__link allartist__link__first__section">
                For the Record
              </NavLink>
            </div>
            <div className="allartist__links__section allartist__links__second__section">
              <h1 className="allartist__links__title allartist__links__second__section__title">
                Comunidades
              </h1>
              <NavLink className="allartist__link allartist__link__second__section">
                Para artistas
              </NavLink>
              <NavLink className="allartist__link allartist__link__second__section">
                Desarrolladores
              </NavLink>
              <NavLink className="allartist__link allartist__link__second__section">
                Publicidad
              </NavLink>
              <NavLink className="allartist__link allartist__link__second__section">
                Inversionistas
              </NavLink>
              <NavLink className="allartist__link allartist__link__second__section">
                Proveedores
              </NavLink>
            </div>
            <div className="allartist__links__section allartist__links__third__section">
              <h1 className="allartist__links__title allartist__links__third__section__title">
                Enlaces útiles
              </h1>
              <NavLink className="allartist__link allartist__link__third__section">
                Ayuda
              </NavLink>
              <NavLink className="allartist__link allartist__link__third__section">
                App móvil gratis
              </NavLink>
            </div>
          </div>
          <section className="allartist__social__container">
            <div className="allartist__social__icons">
              <FaInstagram className="allartist__social__icon" />
              <AiOutlineTwitter className="allartist__social__icon" />
              <FaFacebook className="allartist__social__icon" />
            </div>
          </section>
        </section>
      </section>
      <hr className="allartist__footer__divisor" />
      <footer className="allartist__footer__section">
        <h5 className="allartist__footer__section__title">© 2024 Spotify AB</h5>
      </footer>
    </section>
  );
};

export default AllArtist;
