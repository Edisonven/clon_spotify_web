import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/views/Register/Register.jsx";
import Home from "./components/views/Home/Home.jsx";

function App() {
  return (
    <section className="app__container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </section>
  );
}

export default App;
