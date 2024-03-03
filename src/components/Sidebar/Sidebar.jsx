import { NavLink } from "react-router-dom";
import "../Sidebar/sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar__container">
      <div className="sidebar__first__section">
        <div className="sidebar__logo__section">
          <NavLink className=" sidebar__logo__link__spotify">
            <i class="bx bxl-spotify sidebar__icon"></i>
            <p className="sidebar__logo__paragraph sidebar__logo__paragraph__spotify">
              Spotify
            </p>
          </NavLink>
        </div>
        <div className="sidebar__logo__inicio">
          <NavLink className="sidebar__logo__link">
            <span className="material-symbols-outlined sidebar__icon sidebar__icon__inicio">
              home
            </span>
            <p className="sidebar__logo__paragraph sidebar__logo__paragraph__inicio__section">
              Inicio
            </p>
          </NavLink>
        </div>
        <div className="sidebar__logo__inicio">
          <NavLink className="sidebar__logo__link">
            <i className="bx bx-search sidebar__icon sidebar__icon__inicio"></i>
            <p className="sidebar__logo__paragraph sidebar__logo__paragraph__inicio__section">
              Buscar
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
