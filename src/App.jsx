import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/views/Register/Register.jsx";
import Home from "./components/views/Home/Home.jsx";
import RegisterNumber from "./components/views/Register/RegisterNumber.jsx";
import ValidateNumber from "./components/views/ValidateNumber/ValidateNumber.jsx";
import SingUp from "./components/views/SingUp/SingUp.jsx";
import ResetPassword from "./components/views/ResetPassword/ResetPaswword.jsx";
import MailSent from "./components/views/MailSent/MailSent.jsx";
import ArtistModal from "./components/ArtistModal/ArtistModal.jsx";

function App() {
  return (
    <section className="app__container">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/register/:register_with_number"
          element={<RegisterNumber />}
        />
        <Route
          path="/register/:register_with_number/:validate_number"
          element={<ValidateNumber />}
        />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/singup/:reset_password" element={<ResetPassword />} />
        <Route
          path="/singup/:reset_password/:mail_sent"
          element={<MailSent />}
        />
      </Routes>
      <ArtistModal></ArtistModal>
    </section>
  );
}

export default App;
