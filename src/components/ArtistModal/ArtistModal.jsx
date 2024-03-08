import "../ArtistModal/artistmodal.css";

const ArtistModal = ({children, className}) => {
  return (
    <section className={className}>
    {children}
    </section>
  );
};

export default ArtistModal;
