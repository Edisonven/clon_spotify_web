import Principal from "../../Principal/Principal.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import Footer from "../../Footer/Footer.jsx";
import "../Home/home.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllArtist from "../AllArtist/AllArtist.jsx";
import Podcasts from "../Podcasts/Poscasts.jsx";
import AllPodcasts from "../AllPodcasts/AllPodcasts.jsx";
import Search from "../Search/Search.jsx";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useEffect, useState } from "react";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  const handleWindowResize = () => {
    if (window.innerWidth > 1165) {
      setActiveMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [activeMenu]);

  const navigate = useNavigate();

  useEffect(() => {
    if (navigate) {
      setActiveMenu(true);
    }
  }, [navigate]);

  const handleSidebarMenu = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    const sidebarContainer = document.querySelector(".sidebar__container");

    if (activeMenu) {
      sidebarContainer.classList.add("sidebarActive");
    } else {
      sidebarContainer.classList.remove("sidebarActive");
    }
  }, [activeMenu]);

  return (
    <section className="home__container">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/all_artists" element={<AllArtist />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/podcasts/allpodcasts" element={<AllPodcasts />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Sidebar activeMenu={activeMenu} />
      <Footer />
      {activeMenu ? (
        <AiOutlineMenuUnfold
          onClick={handleSidebarMenu}
          className="home__menu__icon"
        />
      ) : (
        <AiOutlineMenuFold
          onClick={handleSidebarMenu}
          className="home__menu__icon"
        />
      )}
    </section>
  );
};

export default Home;
