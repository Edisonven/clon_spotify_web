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

  let totalLength = 0;

  const filteredArtists = [];

  const newData = [...artistData];

  for (const artist of newData) {
    if (filteredArtists.length >= 7) break;
    filteredArtists.push(artist);
    totalLength += artist.name.length;
  }

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
    <section className="principal__container allartist__container">
      <nav className="principal__navbar allartist__navbar">
        <div className="principal__navbar__icons allartist__navbar__icons">
          <IoIosArrowBack className="principal__navbar__icon allartist__navbar__icon" />
          <IoIosArrowForward className="principal__navbar__icon allartist__navbar__icon" />
        </div>
        <div className="principal__register__section allartist__register__section">
          <div className="principal__navbar__links allartist__navbar__links">
            <Link className="principal__navbar__link allartist__navbar__link">
              Premium
            </Link>
            <Link className="principal__navbar__link allartist__navbar__link">
              Ayuda
            </Link>
            <Link className="principal__navbar__link allartist__navbar__link">
              Descargar
            </Link>
          </div>
          <span className="principal__navbar__divisor allartist__navbar__divisor">
            '
          </span>
          <div className="principal__navbar__register allartist__navbar__register">
            <Link
              to="/register"
              className="principal__navbar__link__register allartist__navbar__link__register"
            >
              Regístrate
            </Link>
            <Button
              onClick={NavigateToSingUp}
              className="btn principal__navbar__btn allartist__navbar__btn"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </nav>
      <section className="principal__body__container allartist__body__container">
        <div className="principal__body__title__section allartist__body__title__section">
          <h1 className="principal__body__title allartist__body__title">
            Artistas Populares
          </h1>
        </div>
        <section className="principal__artist__section allartist__artist__section">
          <div className="allartist__artistcard__cards__container">
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
        <section className="principal__links__section__container allartist__links__section__container">
          <div className="principal__links__conatiner allartist__links__conatiner">
            <div className="principal__links__section allartist__links__section allartist__links__first__section">
              <h1 className="principal__links__title allartist__links__title allartist__links__first__section__title">
                Compañía
              </h1>
              <NavLink className="principal__link allartist__link allartist__link__first__section">
                Acerca de
              </NavLink>
              <NavLink className="principal__link allartist__link allartist__link__first__section">
                Empleo
              </NavLink>
              <NavLink className="principal__link allartist__link allartist__link__first__section">
                For the Record
              </NavLink>
            </div>
            <div className="principal__links__section allartist__links__section allartist__links__second__section">
              <h1 className="principal__links__title allartist__links__title allartist__links__second__section__title">
                Comunidades
              </h1>
              <NavLink className="principal__link allartist__link allartist__link__second__section">
                Para artistas
              </NavLink>
              <NavLink className="principal__link allartist__link allartist__link__second__section">
                Desarrolladores
              </NavLink>
              <NavLink className="principal__link allartist__link allartist__link__second__section">
                Publicidad
              </NavLink>
              <NavLink className="principal__link allartist__link allartist__link__second__section">
                Inversionistas
              </NavLink>
              <NavLink className="principal__link allartist__link allartist__link__second__section">
                Proveedores
              </NavLink>
            </div>
            <div className="principal__links__section allartist__links__section allartist__links__third__section">
              <h1 className="principal__links__title allartist__links__title allartist__links__third__section__title">
                Enlaces útiles
              </h1>
              <NavLink className="principal__link allartist__link allartist__link__third__section">
                Ayuda
              </NavLink>
              <NavLink className="principal__link allartist__link allartist__link__third__section">
                App móvil gratis
              </NavLink>
            </div>
          </div>
          <section className="principal__social__container allartist__social__container">
            <div className="principal__social__icons allartist__social__icons">
              <FaInstagram className="principal__social__icon allartist__social__icon" />
              <AiOutlineTwitter className="principal__social__icon allartist__social__icon" />
              <FaFacebook className="principal__social__icon allartist__social__icon" />
            </div>
          </section>
        </section>
      </section>
      <hr className="principal__footer__divisor allartist__footer__divisor" />
      <footer className="principal__footer__section allartist__footer__section">
        <h5 className="principal__footer__section__title allartist__footer__section__title">
          © 2024 Spotify AB
        </h5>
      </footer>
    </section>
  );
};

export default AllArtist;
