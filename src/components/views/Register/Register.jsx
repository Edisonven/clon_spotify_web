import { NavLink } from "react-router-dom";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import Button from "../../Button/Button";
import "../Register/register.css";

const Register = () => {
  return (
    <section className="register__container">
      <nav className="register__navbar">
        <SpotifyHome to="/" className="register__logo__link__spotify">
          <i className="bx bxl-spotify register__icon"></i>
          <p className="register__paragraph register__logo__paragraph register__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
      <section className="register__section__container">
        <h1 className="register__section__title">
          Regístrate para empezar a escuchar contenido
        </h1>
        <div className="resgister__form__container">
          <form className="register__form">
            <label className="register__label__correo" htmlFor="correo">
              Dirección de email
            </label>
            <input
              name="correo"
              type="text"
              className="register__input__correo"
              placeholder="nombre@dominio.com"
            />
            <NavLink className="register__number__link">
              Usar el número de teléfono.
            </NavLink>
            <Button className="register__number__btn">Siguiente</Button>
            <div className="register__divisor__container">
              <hr className="register__divisor" />
              <span>o</span>
              <hr className="register__divisor" />
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Register;
