import { Link } from "react-router-dom";
import "../Principal/principal.css/";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";

const Principal = () => {
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
            <Link className="principal__navbar__link__register">
              Regístrate
            </Link>
            <Button className="btn principal__navbar__btn">
              Iniciar sesión
            </Button>
          </div>
        </div>
      </nav>

      <section className="principal__body__container">
        <div className="principal__body__title__section">
          <Link className="principal__body__title">Playlists de Spotify</Link>
          <Link className="principal__body__showmore">Mostrar todo</Link>
        </div>
      </section>
    </section>
  );
};

export default Principal;
