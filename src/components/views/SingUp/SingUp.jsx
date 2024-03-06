import "../SingUp/singup.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

const SingUp = () => {
  const [passwrodEye, setPasswordeye] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserpassword] = useState("");

  const handlePasswordEye = () => {
    setPasswordeye(!passwrodEye);
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="singup__container">
      <nav className="singup__navbar">
        <SpotifyHome to="/" className="singup__logo__link__spotify">
          <i className="bx bxl-spotify singup__icon"></i>
          <p className="singup__paragraph singup__logo__paragraph singup__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
      <div className="singup__body__section">
        <section className="singup__body__container">
          <h1 className="singup__body__title">Inicia sesión en Spotify</h1>
          <div className="singup__social__section">
            <Button className="singup__social__btn">
              <img
                className="singup__social__btn__icon"
                src="/google_icon.webp"
                alt=""
              />
              Registrarte con Goole
            </Button>
            <Button className="singup__social__btn">
              <img
                className="singup__social__btn__icon"
                src="/facebook_icon.webp"
                alt=""
              />
              Registrarte con Facebook
            </Button>
            <Button className="singup__social__btn">
              <img
                className="singup__social__btn__icon"
                src="/apple_icon.png"
                alt=""
              />
              Registrarte con apple
            </Button>
            <Button className="singup__social__btn singup__social__btn__number">
              Continuar con número de teléfono
            </Button>
          </div>
          <hr className="singup__divisor singup__divisor__last" />
          <section className="singup__form__section">
            <form
              onSubmit={(e) => handleFromSubmit(e)}
              className="singup__from"
            >
              <label className="singup__form__label" htmlFor="">
                Email o nombre de usuario
              </label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                className="singup__form__input singup__form__input__name"
                type="text"
                value={userName}
                placeholder="Email o nombre de usuario"
              />
              <label className="singup__form__label" htmlFor="">
                Contraseña
              </label>
              <div className="singup__form__input__password__container">
                <input
                  onChange={(e) => setUserpassword(e.target.value)}
                  value={userPassword}
                  className="singup__form__input singup__form__input__password"
                  type={passwrodEye ? "text" : "password"}
                  placeholder="Contraseña"
                />
                <div
                  onClick={() => handlePasswordEye()}
                  className="singup__form__eyes__icons__container"
                >
                  {passwrodEye ? (
                    <AiOutlineEye className="singup__form__eye__icon" />
                  ) : (
                    <AiOutlineEyeInvisible className="singup__form__eye__icon" />
                  )}
                </div>
              </div>
              <div className="singup__remeber__data">
                <span>Recordarme</span>
              </div>
              <Button className="singup__form__btn">Iniciar Sesión</Button>
              <NavLink className="singup__from__link">
                ¿Has olvidado la contraseña?
              </NavLink>
            </form>
          </section>
          <hr className="singup__divisor singup__divisor__last" />
          <div className="singup__cuenta__section">
            <span className="singup__cuenta__paragraph">
              ¿No tienes una cuenta?
            </span>
            <NavLink to="/register" className="singup__cuenta__link">
              Regístrate en Spotify
            </NavLink>
          </div>
        </section>
      </div>
      <footer className="singup__footer__section">
        <p className="singup__footer__paragraph">
          Este sitio está protegido por reCAPTCHA y se aplican la{" "}
          <NavLink className="singup__footer__link">
            Política de Privacidad
          </NavLink>{" "}
          y los{" "}
          <NavLink className="singup__footer__link">
            Términos de Servicio
          </NavLink>{" "}
          de Google.
        </p>
      </footer>
    </section>
  );
};

export default SingUp;
