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
    </section>
  );
};

export default AllPodcasts;
