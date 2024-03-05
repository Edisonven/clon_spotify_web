import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import "../Register/register.css";

const Register = () => {
  return (
    <section className="register__container">
      <nav className="register__navbar">
        <SpotifyHome to="/" className=" sidebar__logo__link__spotify">
          <i className="bx bxl-spotify sidebar__icon"></i>
          <p className="sidebar__paragraph sidebar__logo__paragraph sidebar__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
    </section>
  );
};

export default Register;
