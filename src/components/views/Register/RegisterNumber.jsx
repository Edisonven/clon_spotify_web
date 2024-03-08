import "../Register/registernumber.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import Button from "../../Button/Button";
import { useContext, useEffect, useState } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";
import Alert from "../../Alert/Alert";
import { IoMdAlert } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RegisterNumber = () => {
  const {
    error,
    setError,
    number,
    setNumber,
    disabledBtn,
    setDisabledBtn,
    onlyNumbers,
    selectValue,
    setSelectValue,
  } = useContext(ValidationContext);
  const [error_2, setError_2] = useState("");

  const navigate = useNavigate();

  const verifyValue = (e) => {
    if (e.trim() === "") {
      setError("Ingresa tu número de teléfono");
      setDisabledBtn(true);
      setError_2("");
    } else if (!onlyNumbers.test(e)) {
      setError("Solo puedes ingresar números.");
      setDisabledBtn(true);
    } else {
      setError("");
      setDisabledBtn(false);
    }
  };

  useEffect(() => {
    const submitBtn = document.querySelector(
      ".register__number__btn__number__section"
    );

    const handleDisabledBtn = () => {
      if (disabledBtn) {
        submitBtn.classList.add("disabled");
      } else {
        submitBtn.classList.remove("disabled");
      }
    };

    handleDisabledBtn();
  }, [disabledBtn]);

  useEffect(() => {
    const singupInputValue = document.querySelector(".register__number__input");
    if (error) {
      singupInputValue.classList.add("singup_active");
    } else {
      singupInputValue.classList.remove("singup_active");
    }
  }, [error]);

  const handleNumberInput = (e) => {
    e.preventDefault();

    if (number === "") {
      setError("Ingresa tu número de teléfono");
      setError_2("");
    } else if (number.length < 9) {
      setError_2("Verifica tu número de teléfono.");
      setError("");
    } else {
      navigate("/register/register_with_number/validate_number");
    }
  };

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
        {error_2 ? (
          <div className="register__number__alert2__container">
            <IoAlertCircleOutline className="register__number__alert2__icon" />
            <Alert className="register__number__alert2">{error_2}</Alert>
          </div>
        ) : null}
        <h1 className="register__number__section__title">
          Ingresa un número de teléfono
        </h1>
        <div className="register__number__form__section">
          <form
            onSubmit={(e) => handleNumberInput(e)}
            className="register__number__form"
          >
            <div className="register__number__numbers">
              <select
                onChange={(e) => setSelectValue(e.target.value)}
                name="select"
                id="select"
                value={selectValue}
                className="register__number__select"
              >
                <option value="+20">+20</option>
                <option value="+971">+971</option>
                <option value="+27">+27</option>
                <option value="+51">+51</option>
                <option value="+52">+52</option>
                <option value="+54">+54</option>
                <option value="+55">+55</option>
                <option value="+56">+56</option>
                <option value="+57">+57</option>
                <option value="+62">+62</option>
                <option value="+66">+66</option>
                <option value="+84">+84</option>
                <option value="+91">+91</option>
                <option value="+212">+212</option>
                <option value="+213">+213</option>
                <option value="+233">+233</option>
                <option value="+234">+234</option>
                <option value="+254">+254</option>
                <option value="+255">+255</option>
                <option value="+256">+256</option>
                <option value="+593">+593</option>
                <option value="+852">+852</option>
                <option value="+966">+966</option>
              </select>
              <div className="register__number__input__container">
                <input
                  style={{ border: error ? "1px solid red" : "" }}
                  onChange={(e) => {
                    setNumber(e.target.value);
                    verifyValue(e.target.value);
                  }}
                  value={number}
                  className="register__number__input"
                  type="text"
                  placeholder="Número de teléfono"
                />
                {error ? (
                  <div className="register__number__alert__container">
                    <IoMdAlert className="register__number__alert__icon" />
                    <Alert className="register__number__alert">{error}</Alert>
                  </div>
                ) : null}
              </div>
            </div>

            <Button
              disabled={disabledBtn}
              className="register__number__btn register__number__btn__number__section"
            >
              Siguiente
            </Button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default RegisterNumber;
