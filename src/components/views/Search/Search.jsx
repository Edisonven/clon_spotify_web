import { useRef, useEffect } from "react";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../Search/search.css";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const searchInputRef = useRef();

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <section className="search__container">
      <PrincipalNavbar className="search__navbar">
        <div className="search__navbar__input__container">
          <IoSearchOutline className="search__navbar__icon" />
          <input
            ref={searchInputRef}
            className="search__navbar__input"
            type="text"
            name=""
            id=""
            placeholder="¿Qué quieres reproducir?"
          />
        </div>
      </PrincipalNavbar>
      <div className="search__section__container">
        <div className="search__title__container">
          <h1 className="search__title">Explorar todo</h1>
        </div>
      </div>
    </section>
  );
};

export default Search;
