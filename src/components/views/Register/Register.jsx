import { NavLink, useNavigate } from "react-router-dom";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import Button from "../../Button/Button";
import "../Register/register.css";
import Alert from "../../Alert/Alert";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";

const Register = () => {
  const navigate = useNavigate();
  const { mail, setError, setExito, setMail, exito, error, validEmail } =
    useContext(ValidationContext);

  useEffect(() => {
    // Resetea los valores cuando cambies de vista
    return () => {
      setError("");
      setExito("");
      setMail("");
    };
  }, [navigate, setError, setExito, setMail]);

  useEffect(() => {
    const singupInputPassword = document.querySelector(
      ".register__input__correo"
    );
    if (error) {
      singupInputPassword.classList.add("singup_active");
    } else {
      singupInputPassword.classList.remove("singup_active");
    }
  }, [error]);

  useEffect(() => {
    const inputFocus = document.querySelector(".register__input__correo");
    const onFocus = () => {
      if (inputFocus && inputFocus.value === "") {
        setError(true);
        setExito("");
      }
    };

    inputFocus.addEventListener("blur", onFocus);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mail === "") {
      setError(true);
    } else if (!validEmail.test(mail)) {
      setError(true);
      setExito("");
    } else {
      setExito("¡Correo válido!");
      setError("");
    }
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
            {error ? (
              <div className="register__alert__container">
                <IoAlertCircleOutline className="register__alert__icon" />
                <Alert className="register__alert">
                  Este email no es válido. Asegúrate de que tenga un formato
                  como este: ejemplo@email.com
                </Alert>
              </div>
            ) : null}
            {exito ? (
              <div className="register__alert__container">
                <Alert className="register__alert register__alert__exito">
                  {exito}
                </Alert>
              </div>
            ) : null}
            <NavLink
              to="/register/register_with_number"
              className="register__number__link"
            >
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
              <NavLink to="/singup" className="register__cuenta__link">
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
