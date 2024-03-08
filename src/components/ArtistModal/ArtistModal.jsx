import { useContext } from "react";
import "../ArtistModal/artistmodal.css";
import { ArtistContext } from "../contexts/ArtistContext";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const ArtistModal = () => {
  const { artistModal, setArtistModal } = useContext(ArtistContext);
  return (
    <section
      style={{
        width: artistModal ? "100%" : "",
        height: artistModal ? "100vh" : "",
        background: artistModal ? "#000000e7" : "",
      }}
      className="artistmodal__container"
    >
      <div
        style={{
          display: artistModal ? "flex" : "none",
          background: `linear-gradient(to bottom, ${artistModal.color}, #292929`,
        }}
        className="artistmodal__body"
      >
        <div className="artistmodal__img__container">
          <img className="artistmodal__img" src={artistModal.src} alt="" />
        </div>
        <div className="artistmodal__desc__section">
          <h1 className="artistmodal__desc__title">
            Empieza a escuchar con una cuenta gratis de Spotify
          </h1>
          <Button className="artistmodal__desc__btn">Registrarse gratis</Button>
          <Button className="artistmodal__desc__btn artistmodal__desc__btn_download">
            Registrarse gratis
          </Button>
          <div className="artistmodal__desc__link__section">
            <p className="artistmodal__desc__link__paragraph">
              ¿Ya tienes una cuenta?
            </p>
            <NavLink className="artistmodal__desc__link">
              Iniciar sesión
            </NavLink>
          </div>
        </div>
      </div>
      {artistModal ? (
        <button
          onClick={() => setArtistModal(false)}
          className="artistmodal__close__btn"
        >
          Cerrar
        </button>
      ) : null}
    </section>
  );
};

export default ArtistModal;
