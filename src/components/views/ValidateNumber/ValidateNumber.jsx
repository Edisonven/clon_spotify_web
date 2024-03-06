import "../ValidateNumber/validatenumber.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
const ValidateNumber = () => {
  return (
    <section className="validatenumber__container">
      <nav className="register__navbar">
        <SpotifyHome to="/" className="register__logo__link__spotify">
          <i className="bx bxl-spotify register__icon"></i>
          <p className="register__paragraph register__logo__paragraph register__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
    </section>
  );
};

export default ValidateNumber;
