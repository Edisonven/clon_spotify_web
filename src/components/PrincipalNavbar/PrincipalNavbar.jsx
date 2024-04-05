import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button.jsx";
import { Link, useNavigate } from "react-router-dom";

const PrincipalNavbar = ({ className, children }) => {
  const navigate = useNavigate();
  const NavigateToSingUp = () => {
    navigate("/singin");
  };
  return (
    <nav className={`${className} principal__navbar`}>
      <div className="principal__navbar__icontitle__container">
        <div className="principal__navbar__icons">
          <IoIosArrowBack className="principal__navbar__icon" />
          <IoIosArrowForward className="principal__navbar__icon" />
        </div>
        <div className="principal__navbar__title">{children}</div>
      </div>
      <div className="principal__register__section">
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
