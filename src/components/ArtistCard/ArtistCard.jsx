import "../ArtistCard/artistcard.css";

const ArtistCard = ({ children, className, cardanim }) => {
  return (
    <section cardanim={cardanim} className={className}>
      {children}
    </section>
  );
};

export default ArtistCard;
