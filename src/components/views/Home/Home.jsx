import Principal from "../../Principal/Principal.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import Footer from "../../Footer/Footer.jsx";
import "../Home/home.css";

const Home = () => {
  return (
    <section className="home__container">
      <Principal />
      <Sidebar />
      <Footer />
    </section>
  );
};

export default Home;
