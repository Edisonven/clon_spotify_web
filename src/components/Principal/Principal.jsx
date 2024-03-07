import { Link, useNavigate } from "react-router-dom";
import "../Principal/principal.css/";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import ArtistCard from "../ArtistCard/ArtistCard";

const Principal = () => {
  const navigate = useNavigate();

  const NavigateToSingUp = () => {
    navigate("/singup");
  };
  return (
    <section className="principal__container">
      <nav className="principal__navbar">
        <div className="principal__navbar__icons">
          <IoIosArrowBack className="principal__navbar__icon" />
          <IoIosArrowForward className="principal__navbar__icon" />
        </div>
        <div className="principal__register__section">
          <div className="principal__navbar__links">
            <Link className="principal__navbar__link">Premium</Link>
            <Link className="principal__navbar__link">Ayuda</Link>
            <Link className="principal__navbar__link">Descargar</Link>
          </div>
          <span className="principal__navbar__divisor">'</span>
          <div className="principal__navbar__register">
            <Link to="/register" className="principal__navbar__link__register">
              Regístrate
            </Link>
            <Button
              onClick={NavigateToSingUp}
              className="btn principal__navbar__btn"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </nav>
      <section className="principal__body__container">
        <div className="principal__body__title__section">
          <Link className="principal__body__title">Artistas Populares</Link>
          <Link className="principal__body__showmore">Mostrar todo</Link>
        </div>
        <section className="principal__artist__section">
          <div className="artistcard__cards__container">
            <ArtistCard className="artistcard__card">
              <img className="artistcard__img" src="/taylor.jpeg" alt="" />
              <h1 className="artistcard__name">Taylor Swift</h1>
              <p className="artistcard__desc">Artista</p>
            </ArtistCard>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Principal;
