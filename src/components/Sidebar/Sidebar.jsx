import { Link, NavLink } from "react-router-dom";
import "../Sidebar/sidebar.css";
import { useState } from "react";
import { PiMusicNotesPlus } from "react-icons/pi";
import AsideCard from "../AsideCard/AsideCard";
import { MdLanguage } from "react-icons/md";
import Button from "../Button/Button";
import PlaylistModal from "../PlaylistModal/PlaylistModal";

const Sidebar = () => {
  const [createPlaytist, setCreatePlaylist] = useState(false);
  const [playlistModal, setPlaylistModal] = useState(false);

  const handlePlaylistModal = () => {
    setPlaylistModal(!playlistModal);
  };

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
              onClick={() => {
                handleCreatePlaylist();
                setPlaylistModal(false);
              }}
              className="sidebar__biblio__btn"
            >
              <i className="bx bx-plus sidebar__icon sidebar__icon__library"></i>
            </button>
            {playlistModal ? (
              <div className="playlistmodal__container">
                <PlaylistModal className="playlistmodal">
                  <div className="playlist__modal__title__container">
                    <h4 className="playlistmodal__title">Crea una playlist</h4>
                    <p className="playlist__modal__subtitle">
                      Inicia sesión para crear y compartir playlists.
                    </p>
                  </div>
                  <div className="playlistmodal__links__container">
                    <button
                      onClick={() => setPlaylistModal(false)}
                      className="playlistmodal__notnow__btn"
                    >
                      Ahora no
                    </button>
                    <Link className="btn playlistmodal__session">
                      Iniciar sesión
                    </Link>
                  </div>
                </PlaylistModal>
              </div>
            ) : null}
            {createPlaytist ? (
              <div
                onClick={() => {
                  handleCreatePlaylist();
                  handlePlaylistModal();
                }}
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
        <div className="asidecard__cards__section">
          <div className="asidecard__card__container">
            <AsideCard>
              <h1 className="asidecard__title">Crea tu primera playlist</h1>
              <h5 className="asidecard__subtitle">
                ¡Es muy fácil! Te vamos a ayudar
              </h5>
              <Button
                onClick={() => setPlaylistModal(true)}
                className="btn asidecard__btn"
              >
                Crear playlist
              </Button>
            </AsideCard>
            <AsideCard>
              <h1 className="asidecard__title">
                Busquemos algunos podcast para seguir
              </h1>
              <h5 className="asidecard__subtitle">
                Te mantendremos al tanto de los nuevos episodios.
              </h5>
              <Button className="btn asidecard__btn">Explorar podscasts</Button>
            </AsideCard>
          </div>
          <div className="sidebar__legal__section">
            <div className="sidebar__legal__container">
              <Link className="sidebar__legal__link">Legal</Link>
              <Link className="sidebar__legal__link">
                Seguridad Y Centro de Privacidad
              </Link>
              <Link className="sidebar__legal__link">
                Política de privacidad
              </Link>
              <Link className="sidebar__legal__link">Cookies</Link>
              <Link className="sidebar__legal__link">Sobre los anuncios</Link>
              <Link className="sidebar__legal__link">Accesibilidad</Link>
              <Link className="sidebar__legal__link">Notice At Collection</Link>
              <Link className="sidebar__legal__link">Your Privacy Choices</Link>
              <Link className="sidebar__legal__link sidebar__legal__link__cookies">
                Cookies
              </Link>
              <div className="sidebar__language__Section">
                <button className="sidebar__language__btn">
                  <MdLanguage className="sidebar__language__icon" />
                  Español De Latinoamérica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
