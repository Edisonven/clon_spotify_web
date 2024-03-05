import "../Register/registernumber.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import Button from "../../Button/Button";

const RegisterNumber = () => {
  return (
    <section className="register__number__container">
      <nav className="register__navbar">
        <SpotifyHome to="/" className="register__logo__link__spotify">
          <i className="bx bxl-spotify register__icon"></i>
          <p className="register__paragraph register__logo__paragraph register__logo__paragraph__spotify">
            Spotify
          </p>
        </SpotifyHome>
      </nav>
      <section className="register__number__section__container">
        <h1 className="register__number__section__title">
          Ingresa un número de teléfono
        </h1>
        <div className="register__number__form__section">
          <form className="register__number__form">
            <div className="register__number__numbers">
              <select
                name="select"
                id="select"
                className="register__number__select"
              >
                <option label="+20" value="EG">
                  +20
                </option>
                <option label="+971" value="AE">
                  +971
                </option>
                <option label="+27" value="ZA">
                  +27
                </option>
                <option label="+51" value="PE">
                  +51
                </option>
                <option label="+52" value="MX">
                  +52
                </option>
                <option label="+54" value="AR">
                  +54
                </option>
                <option label="+55" value="BR">
                  +55
                </option>
                <option label="+56" value="CL">
                  +56
                </option>
                <option label="+57" value="CO">
                  +57
                </option>
                <option label="+62" value="ID">
                  +62
                </option>
                <option label="+66" value="TH">
                  +66
                </option>
                <option label="+84" value="VN">
                  +84
                </option>
                <option label="+91" value="IN">
                  +91
                </option>
                <option label="+212" value="MA">
                  +212
                </option>
                <option label="+213" value="DZ">
                  +213
                </option>
                <option label="+233" value="GH">
                  +233
                </option>
                <option label="+234" value="NG">
                  +234
                </option>
                <option label="+254" value="KE">
                  +254
                </option>
                <option label="+255" value="TZ">
                  +255
                </option>
                <option label="+256" value="UG">
                  +256
                </option>
                <option label="+593" value="EC">
                  +593
                </option>
                <option label="+852" value="HK">
                  +852
                </option>
                <option label="+966" value="SA">
                  +966
                </option>
              </select>
              <input
                className="register__number__input"
                type="text"
                placeholder="Número de teléfono"
              />
            </div>

            <Button className="register__number__btn">Siguiente</Button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default RegisterNumber;
