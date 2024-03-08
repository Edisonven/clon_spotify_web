import Principal from "../../Principal/Principal.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import Footer from "../../Footer/Footer.jsx";
import "../Home/home.css";
import { Route, Routes } from "react-router-dom";
import AllArtist from "../AllArtist/AllArtist.jsx";

const Home = () => {
  return (
    <section className="home__container">
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/all_artists" element={<AllArtist></AllArtist>} />
      </Routes>
      <Sidebar />
      <Footer />
    </section>
  );
};

export default Home;
