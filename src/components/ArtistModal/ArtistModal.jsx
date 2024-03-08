import { useContext } from "react";
import "../ArtistModal/artistmodal.css";
import { ArtistContext } from "../contexts/ArtistContext";

const ArtistModal = () => {
  const { artistModal } = useContext(ArtistContext);
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
          background: artistModal.color,
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
        </div>
      </div>
    </section>
  );
};

export default ArtistModal;
