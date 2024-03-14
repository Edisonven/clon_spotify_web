import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../Podcasts/podcasts.css";

const Podcasts = () => {
  return (
    <section className="principal__podcasts">
      <PrincipalNavbar className="principal__podcasts__nav" />
      <div className="principal__podcasts__title__container">
        <h1 className="principal__podcasts__title">Podcasts</h1>
      </div>
      <div className="principal__podcasts__container">

      </div>
    </section>
  );
};

export default Podcasts;
