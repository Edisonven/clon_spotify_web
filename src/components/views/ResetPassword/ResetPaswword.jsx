import "../ResetPassword/resetpassword.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";

const ResetPassword = () => {
  return (
    <section className="ressetpassword__container">
      <nav className="singup__navbar">
        <SpotifyHome to="/" className="singup__logo__link__spotify">
          <i className="bx bxl-spotify singup__icon"></i>
          <p className="singup__paragraph singup__logo__paragraph singup__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
    </section>
  );
};

export default ResetPassword;
