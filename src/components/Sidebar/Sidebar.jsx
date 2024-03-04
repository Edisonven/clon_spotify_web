import { NavLink } from "react-router-dom";
import "../Sidebar/sidebar.css";
import { useState } from "react";
import { PiMusicNotesPlus } from "react-icons/pi";

const Sidebar = () => {
  const [createPlaytist, setCreatePlaylist] = useState(false);

  const handleCreatePlaylist = () => {
    setCreatePlaylist(!createPlaytist);
  };

  return (
    <section className="sidebar__container">
      <div className="sidebar__first__section">
        <div className="sidebar__logo__section">
          <NavLink className=" sidebar__logo__link__spotify">
            <i className="bx bxl-spotify sidebar__icon"></i>
            <p className="sidebar__paragraph sidebar__logo__paragraph sidebar__logo__paragraph__spotify">
              Spotify
            </p>
          </NavLink>
        </div>
        <div className="sidebar__logo__inicio">
          <NavLink className="sidebar__logo__link">
            <span className="material-symbols-outlined sidebar__icon sidebar__icon__inicio">
              home
            </span>
            <p className="sidebar__paragraph sidebar__logo__paragraph sidebar__logo__paragraph__inicio__section">
              Inicio
            </p>
          </NavLink>
        </div>
        <div className="sidebar__logo__inicio">
          <NavLink className="sidebar__logo__link">
            <i className="bx bx-search sidebar__icon sidebar__icon__inicio"></i>
            <p className="sidebar__paragraph sidebar__logo__paragraph sidebar__logo__paragraph__inicio__section">
              Buscar
            </p>
          </NavLink>
        </div>
      </div>
      <div className="sidebar__second__section">
        <div className="sidebar__biblio__section">
          <div className="sidebar__second__section__title">
            <NavLink className="sidebar__biblio__link">
              <i className="bx bx-library sidebar__icon sidebar__icon__library__title"></i>
              <p className="sidebar__paragraph sidebar__logo__paragraph sidebar__logo__paragraph__library">
                Tu biblioteca
              </p>
            </NavLink>
          </div>
          <div className="sidebar__bliblio__create__list">
            <button
              onClick={() => handleCreatePlaylist()}
              className="sidebar__biblio__btn"
            >
              <i className="bx bx-plus sidebar__icon sidebar__icon__library"></i>
            </button>
            {createPlaytist ? (
              <div
                onClick={() => handleCreatePlaylist()}
                className="create__playlist__info"
              >
                <PiMusicNotesPlus className="musicNote" />
                <p className="sidebar__paragraph sidebar__playlist__paragraph">
                  Crear nueva playlist
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
