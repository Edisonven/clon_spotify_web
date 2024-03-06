import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "../Footer/footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <section onClick={handleNavigate} className="footer__container">
      <div className="footer__title__section">
        <h4 className="footer__title">Muestra de Spotify</h4>
        <h5 className="footer__descrip">
          Regístrate para acceder a canciones y podcasts ilimitados con algunos
          anuncios. No necesitas tarjeta de crédito.
        </h5>
      </div>
      <div className="footer__register__section">
        <Button
          onClick={() => handleNavigate()}
          className="btn footer__register__btn"
        >
          Regístrate gratis
        </Button>
      </div>
    </section>
  );
};

export default Footer;
