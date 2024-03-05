import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import "../Register/register.css";

const Register = () => {
  return (
    <section className="register__container">
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

export default Register;
