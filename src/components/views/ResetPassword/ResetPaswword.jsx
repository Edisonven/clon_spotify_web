import "../ResetPassword/resetpassword.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { useState, useEffect } from "react";
import Alert from "../../Alert/Alert";
import { IoAlertCircleOutline } from "react-icons/io5";

const ResetPassword = () => {
  const [resetError, setResetError] = useState("");
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const resetPasswordInput = document.querySelector(
      ".resetpassword__form__input"
    );
    if (resetError) {
      resetPasswordInput.classList.add("singup_active");
    } else {
      resetPasswordInput.classList.remove("singup_active");
    }
  }, [resetError]);

  const handleFormSubtmit = (e) => {
    e.preventDefault();

    if (inputValue == "") {
      setResetError("Este campo es obligatorio");
    } else {
      setResetError("");
      navigate("/singup/:reset_password/:mail_sent");
    }
  };

  return (
    <section className="resetpassword__container">
      <nav className="singup__navbar">
        <SpotifyHome to="/" className="singup__logo__link__spotify">
          <i className="bx bxl-spotify singup__icon"></i>
          <p className="singup__paragraph singup__logo__paragraph singup__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
      <section className="resetpassword__body__section">
        <h1 className="resetpassword__body__title">Restablece tu contraseña</h1>
        <p className="resetpassword__body__section__desc">
          Ingresa tu dirección de email o nombre de usuario y te enviaremos un
          enlace para volver a ingresar a tu cuenta.
        </p>
        <span className="resetpassword__body__paragraph">
          Dirección de email o nombre de usuario
        </span>
        <form
          onSubmit={(e) => handleFormSubtmit(e)}
          className="resetpassword__body__form"
        >
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="resetpassword__form__input"
            type="text"
          />
          {resetError ? (
            <div className="resetpassword__form__alert__container">
              <IoAlertCircleOutline className="resetpassword__form__alert__icon" />
              <Alert className="resetpassword__form__alert">{resetError}</Alert>
            </div>
          ) : (
            ""
          )}
          <NavLink className="resetpassword__form__help">
            ¿Necesitas ayuda?
          </NavLink>
          <Button
            onClick={handleFormSubtmit}
            className="resetpassword__form__btn"
          >
            Enviar enlace
          </Button>
        </form>
      </section>
      <footer className="resetpassword__footer">
        <p className="resetpassword__footer__paragraph">
          This site is protected by reCAPTCHA and the Google{" "}
          <NavLink className="resetpassword__footer__link">
            Privacy Policy
          </NavLink>{" "}
          and{" "}
          <NavLink className="resetpassword__footer__link">
            Terms of service
          </NavLink>{" "}
          apply.
        </p>
      </footer>
    </section>
  );
};

export default ResetPassword;
