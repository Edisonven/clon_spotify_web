import { Route, Routes } from "react-router-dom";
import Home from "./components/views/Home/Home.jsx";
import SingUpNumber from "./components/views/SingUp/SingUpNumber.jsx";
import ValidateNumber from "./components/views/ValidateNumber/ValidateNumber.jsx";
import ResetPassword from "./components/views/ResetPassword/ResetPaswword.jsx";
import MailSent from "./components/views/MailSent/MailSent.jsx";
import ArtistModal from "./components/ArtistModal/ArtistModal.jsx";
import SingUp from "./components/views/SingUp/SingUp.jsx";
import SingIn from "./components/views/SingIn/SingIn.jsx";

function App() {
  return (
    <section className="app__container">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/singup/singup_with_number" element={<SingUpNumber />} />
        <Route
          path="/singup/singup_with_number/validate_number"
          element={<ValidateNumber />}
        />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singin/reset_password" element={<ResetPassword />} />
        <Route path="/singin/reset_password/mail_sent" element={<MailSent />} />
      </Routes>
      <ArtistModal />
    </section>
  );
}

export default App;
