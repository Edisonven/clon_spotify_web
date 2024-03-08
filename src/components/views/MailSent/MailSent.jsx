import "../MailSent/mailsent.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import Button from "../../Button/Button";
import { RxPencil1 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";

const MailSent = () => {
  const navigate = useNavigate();

  const editMail = () => {
    navigate("/singup/reset_password");
  };

  const singUpBack = () => {
    navigate("/singup");
  };

  return (
    <section className="mailsent__container">
      <nav className="singup__navbar">
        <SpotifyHome to="/" className="singup__logo__link__spotify">
          <i className="bx bxl-spotify singup__icon"></i>
          <p className="singup__paragraph singup__logo__paragraph singup__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
      <section className="mailsent__body__section">
        <h1 className="mailsent__body__title">Email enviado</h1>
        <p className="mailsent__body__section__desc">
          Te enviamos un email. Sigue las instrucciones para volver a ingresar a
          tu cuenta.
        </p>
        <Button onClick={singUpBack} className="mailsent__body__btn">
          Regresar al inicio de sesión
        </Button>
        <Button
          onClick={editMail}
          className="mailsent__body__btn mailsent__body__btn__edit"
        >
          <RxPencil1 className="mailsent__btn__icon" />
          Editar mail/nombre de usuario
        </Button>
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

export default MailSent;
