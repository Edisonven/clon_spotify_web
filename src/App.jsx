import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  return (
    <section className="app__container">
      <Sidebar />
      <Footer />
    </section>
  );
}

export default App;
