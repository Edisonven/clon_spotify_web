import { useContext } from "react";
import "../ArtistModal/artistmodal.css";
import { ArtistContext } from "../contexts/ArtistContext";

const ArtistModal = () => {
  const { artistModal } = useContext(ArtistContext);
  return (
    <section className="artistmodal__container">
      <img src={artistModal.src} alt="" />
    </section>
  );
};

export default ArtistModal;
