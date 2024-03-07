import "../ArtistCard/artistcard.css";

const ArtistCard = ({children,className}) => {
  return (
    <section className={className}>
    {children}
    </section>
  );
};

export default ArtistCard;
