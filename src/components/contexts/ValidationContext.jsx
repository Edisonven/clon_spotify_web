import { createContext, useState, useEffect } from "react";

export const ValidationContext = createContext();

const ValidationProvider = ({ children }) => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const [number, setNumber] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const validEmail =
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.(com|cl|net|org|gov|edu|info|biz|co|uk|...)){1,}$/;

  const onlyNumbers = /^\d+$/;

  return (
    <ValidationContext.Provider
      value={{
        mail,
        setMail,
        error,
        setError,
        exito,
        setExito,
        validEmail,
        number,
        setNumber,
        disabledBtn,
        setDisabledBtn,
        onlyNumbers,
      }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export default ValidationProvider;
