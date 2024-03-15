import Principal from "../../Principal/Principal.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import Footer from "../../Footer/Footer.jsx";
import "../Home/home.css";
import { Route, Routes } from "react-router-dom";
import AllArtist from "../AllArtist/AllArtist.jsx";
import Podcasts from "../Podcasts/Poscasts.jsx";
import AllPodcasts from "../AllPodcasts/AllPodcasts.jsx";

const Home = () => {
  return (
    <section className="home__container">
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/all_artists" element={<AllArtist />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/podcasts/allpodcasts" element={<AllPodcasts />} />
      </Routes>
      <Sidebar />
      <Footer />
    </section>
  );
};

export default Home;
