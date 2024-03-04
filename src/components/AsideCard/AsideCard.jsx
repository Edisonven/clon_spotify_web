import "../AsideCard/asidecard.css";

const AsideCard = ({children}) => {
  return (
    <section className="asidecard__container">
      {children}
    </section>
  );
};

export default AsideCard;
