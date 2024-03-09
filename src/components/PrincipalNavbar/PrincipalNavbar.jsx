import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

const PrincipalNavbar = () => {
  const navigate = useNavigate();
  const NavigateToSingUp = () => {
    navigate("/singin");
  };
  return (
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
        <span className="principal__navbar__divisor"></span>
        <div className="principal__navbar__register">
          <Link to="/singup" className="principal__navbar__link__register">
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
  );
};
export default PrincipalNavbar;
