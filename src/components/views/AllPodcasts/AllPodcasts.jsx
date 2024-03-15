import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../AllPodcasts/allpodcasts.css";

const AllPodcasts = () => {
  return (
    <section className="allpodcasts__container">
      <PrincipalNavbar className="allpodcasts__nav">
        <h1 className="allpodcasts__nav__title" scroll-anim="move">
          Todas las categorías de podcasts
        </h1>
      </PrincipalNavbar>
      <section className="allpodcasts__section__container">
        <div className="allpodcasts__section__title__container">
          <h1 className="allpodcasts__section__title">
            Todas las categorías de podcasts
          </h1>
        </div>
      </section>
    </section>
  );
};

export default AllPodcasts;
