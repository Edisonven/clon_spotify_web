import { NavLink } from "react-router-dom";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import Button from "../../Button/Button";
import "../Register/register.css";
import { useState } from "react";

const Register = () => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const validEmail =
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.(com|cl|net|org|gov|edu|info|biz|co|uk|...)){1,}$/;
  const handleSubmit = (event) => {
    event.preventDefault();

    if (mail === "") {
      setError(
        "Este email no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com"
      );
    } else if (!validEmail.test(mail))
      setError(
        "Este email no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com"
      );
  };

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
              onChange={(event) => setMail(event.target.value)}
              value={mail}
              name="correo"
              type="text"
              className="register__input__correo"
              placeholder="nombre@dominio.com"
            />
            <span>{error}</span>
            <NavLink className="register__number__link">
              Usar el número de teléfono.
            </NavLink>
            <Button
              onClick={(e) => handleSubmit(e)}
              className="register__number__btn"
            >
              Siguiente
            </Button>
            <div className="register__divisor__container">
              <hr className="register__divisor" />
              <span>o</span>
              <hr className="register__divisor" />
            </div>
          </form>
          <div className="register__social__section">
            <Button className="register__social__btn">
              <img
                className="register__social__btn__icon"
                src="/google_icon.webp"
                alt=""
              />
              Registrarte con Goole
            </Button>
            <Button className="register__social__btn">
              <img
                className="register__social__btn__icon"
                src="/facebook_icon.webp"
                alt=""
              />
              Registrarte con Facebook
            </Button>
            <Button className="register__social__btn">
              <img
                className="register__social__btn__icon"
                src="/apple_icon.png"
                alt=""
              />
              Registrarte con apple
            </Button>
            <hr className="register__divisor register__divisor__last" />
            <div className="register__cuenta__secdtion">
              <span className="register__cuenta__paragraph">
                ¿Ya tienes una cuenta?
              </span>
              <NavLink className="register__cuenta__link">
                Inicia sesión aquí.
              </NavLink>
            </div>
            <footer className="register__footer__section">
              <p className="register__footer__paragraph">
                This site is protected by reCAPTCHA and the Google{" "}
                <NavLink className="register__footer__link">
                  Privacy Policy
                </NavLink>{" "}
                and{" "}
                <NavLink className="register__footer__link">
                  Terms of Service
                </NavLink>{" "}
                apply.
              </p>
            </footer>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Register;
