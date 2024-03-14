import { FaInstagram } from "react-icons/fa6";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PrincipalLinks = ({ className }) => {
  return (
    <section className={`${className} principal__links__section__container`}>
      <div className="principal__links__conatiner">
        <div className="principal__links__section principal__links__first__section">
          <h1 className="principal__links__title principal__links__first__section__title">
            Compañía
          </h1>
          <NavLink className="principal__link principal__link__first__section">
            Acerca de
          </NavLink>
          <NavLink className="principal__link principal__link__first__section">
            Empleo
          </NavLink>
          <NavLink className="principal__link principal__link__first__section">
            For the Record
          </NavLink>
        </div>
        <div className="principal__links__section principal__links__second__section">
          <h1 className="principal__links__title principal__links__second__section__title">
            Comunidades
          </h1>
          <NavLink className="principal__link principal__link__second__section">
            Para artistas
          </NavLink>
          <NavLink className="principal__link principal__link__second__section">
            Desarrolladores
          </NavLink>
          <NavLink className="principal__link principal__link__second__section">
            Publicidad
          </NavLink>
          <NavLink className="principal__link principal__link__second__section">
            Inversionistas
          </NavLink>
          <NavLink className="principal__link principal__link__second__section">
            Proveedores
          </NavLink>
        </div>
        <div className="principal__links__section principal__links__third__section">
          <h1 className="principal__links__title principal__links__third__section__title">
            Enlaces útiles
          </h1>
          <NavLink className="principal__link principal__link__third__section">
            Ayuda
          </NavLink>
          <NavLink className="principal__link principal__link__third__section">
            App móvil gratis
          </NavLink>
        </div>
      </div>
      <section className="principal__social__container">
        <div className="principal__social__icons">
          <FaInstagram className="principal__social__icon" />
          <AiOutlineTwitter className="principal__social__icon" />
          <FaFacebook className="principal__social__icon" />
        </div>
      </section>
    </section>
  );
};

export default PrincipalLinks;
