import "../ValidateNumber/validatenumber.css";
import SpotifyHome from "../../SpotifyHome/SpotifyHome";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import { useContext, useEffect, useState } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";
import { IoMdAlert } from "react-icons/io";
import Alert from "../../Alert/Alert";
import { FaCheck } from "react-icons/fa6";

const ValidateNumber = () => {
  const { onlyNumbers, number, selectValue } = useContext(ValidationContext);

  const [codeError, setCodeError] = useState("");
  const [code, setCode] = useState("");
  const [codeExito, setCodeExito] = useState("");
  const [disabledBtnCode, setDisabledBtnCode] = useState(true);

  useEffect(() => {
    const submitBtnCode = document.querySelector(
      ".register__number__btn__numbervalid__section"
    );

    const handleDisabledBtn = () => {
      if (disabledBtnCode) {
        submitBtnCode.classList.add("disabled");
      } else {
        submitBtnCode.classList.remove("disabled");
      }
    };

    handleDisabledBtn();
  }, [disabledBtnCode]);

  const verifyValue = (e) => {
    if (e.trim() === "") {
      setCodeError("Ingresa el código");
      setDisabledBtnCode(true);
      setCodeExito("");
    } else if (!onlyNumbers.test(e)) {
      setCodeError("Solo puedes ingresar números.");
      setDisabledBtnCode(true);
    } else {
      setDisabledBtnCode(false);
      setCodeError("");
    }
  };

  const handleNumberInput = (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      setCodeError("El código debe ser de 6 dígitos.");
      setCodeExito("");
    } else {
      setCodeError("");
      setCodeExito("¡Código correcto!");
    }
  };

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
      <section className="validatenumber__section__container">
        <h1 className="validatenumber__section__title">Ingresa tu código</h1>
        <form
          className="validatenumber__section__form"
          onSubmit={(e) => handleNumberInput(e)}
        >
          <input
            onChange={(e) => {
              setCode(e.target.value);
              verifyValue(e.target.value);
            }}
            value={code}
            type="text"
            className="validatenumber__section__input"
            placeholder="Código de 6 dígitos (ingresa cualquier número)"
          />

          {codeError ? (
            <div className="register__number__validation__alert__container">
              <IoMdAlert className="register__number__validation__alert__icon" />
              <Alert className="register__number__validation__alert">
                {codeError}
              </Alert>
            </div>
          ) : null}
          {codeExito ? (
            <div className="register__number__validation__alert__container">
              <FaCheck className="register__number__validation__icon" />
              <Alert className="register__number__validation__alert register__number__validation__alert__exito">
                {codeExito}
              </Alert>
            </div>
          ) : null}
          <div className="validatenumber__code__section">
            <NavLink
              to="/register/:register_with_number"
              className="validationnumber__code__link"
            >
              Obtener nuevo código
            </NavLink>
            <Button
              disabled={disabledBtnCode}
              className="register__number__btn register__number__btn__numbervalid__section"
            >
              Siguiente
            </Button>
          </div>
        </form>
        <h4 className="validnumber__simulation__info">(Simulación)</h4>
        <h4 className="validatenumber__code__sent">
          Enviamos un SMS con tu código de 6 dígitos a{" "}
          <span>
            {selectValue}
            {"-"}
            {number}
          </span>
        </h4>
      </section>
    </section>
  );
};

export default ValidateNumber;
