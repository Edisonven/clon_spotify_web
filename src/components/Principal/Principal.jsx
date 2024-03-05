import "../Principal/principal.css/";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Principal = () => {
  return (
    <section className="principal__container">
      <nav className="principal__navbar">
        <div className="principal__navbar__icons">
          <IoIosArrowBack className="principal__navbar__icon" />
          <IoIosArrowForward className="principal__navbar__icon" />
        </div>
      </nav>
    </section>
  );
};

export default Principal;
