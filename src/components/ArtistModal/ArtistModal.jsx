import { useContext } from "react";
import "../ArtistModal/artistmodal.css";
import { ArtistContext } from "../contexts/ArtistContext";

const ArtistModal = () => {
  const { artistModal } = useContext(ArtistContext);
  return (
    <section
      style={{
        display: artistModal ? "flex" : "none",
        background: artistModal.color,
      }}
      className="artistmodal__container"
    >
      <div className="artistmodal__img__container">
        <img className="artistmodal__img" src={artistModal.src} alt="" />
      </div>
      <div className="artistmodal__desc__section">
        <h1 className="artistmodal__desc__title">Empieza a escuchar con una cuenta gratis de Spotify</h1>
      </div>
    </section>
  );
};

export default ArtistModal;
