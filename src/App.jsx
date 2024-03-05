import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/views/Register/Register.jsx";
import Home from "./components/views/Home/Home.jsx";
import RegisterNumber from "./components/views/Register/RegisterNumber.jsx";

function App() {
  return (
    <section className="app__container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/register/:register_with_number"
          element={<RegisterNumber />}
        />
      </Routes>
    </section>
  );
}

export default App;
