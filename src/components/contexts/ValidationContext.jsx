import { createContext, useState } from "react";

export const ValidationContext = createContext();

const ValidationProvider = ({ children }) => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const validEmail =
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.(com|cl|net|org|gov|edu|info|biz|co|uk|...)){1,}$/;

  return (
    <ValidationContext.Provider
      value={{ mail, setMail, error, setError, exito, setExito, validEmail }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export default ValidationProvider;
