import "../ValidateNumber/validatenumber.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import { useContext } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";

const ValidateNumber = () => {
  const { disabledBtn } = useContext(ValidationContext);
  return (
    <section className="validatenumber__container">
      <nav className="register__navbar">
        <SpotifyHome to="/" className="register__logo__link__spotify">
          <i className="bx bxl-spotify register__icon"></i>
          <p className="register__paragraph register__logo__paragraph register__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
      <section className="validatenumber__section__container">
        <h1 className="validatenumber__section__title">Ingresa tu código</h1>
        <input
          type="text"
          className="validatenumber__section__input"
          placeholder="Código de 6 dígitos"
        />
        <div className="validatenumber__code__section">
          <NavLink className="validationnumber__code__link">Obtener nuevo código</NavLink>
          <Button
            disabled={disabledBtn}
            className="register__number__btn register__number__btn__number__section"
          >
            Siguiente
          </Button>
        </div>
      </section>
    </section>
  );
};

export default ValidateNumber;
