import { useRef, useEffect, useContext, useState } from "react";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../Search/search.css";
import { IoSearchOutline } from "react-icons/io5";
import { SearchContext } from "../../contexts/SearchContext";
import PodcastsCard from "../Podcasts/PodcastsCard/PodcastsCard";
import PrincipalLinks from "../../PrincipalLinks/PrincipalLinks";
import PrincipalFooter from "../../PrincipalFooter/PrincipalFooter";
import { IoMdClose } from "react-icons/io";

const Search = () => {
  const { searchData } = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState("");
  const [inputCloseBtn, setInputCloseBtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const searchInputRef = useRef();

  useEffect(() => {
    if (searchInput) {
      const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      };

      const filteredArray = searchData.filter((data) =>
        removeAccents(data.name.toLowerCase()).includes(
          removeAccents(searchInput.toLowerCase())
        )
      );
      setFilteredData(filteredArray);
    } else {
      setFilteredData(searchData);
    }
  }, [searchInput, searchData]);

  useEffect(() => {
    if (searchInput) {
      setInputCloseBtn(true);
    } else {
      setInputCloseBtn(false);
    }
  }, [inputCloseBtn, searchInput]);

  const eraseInputContent = () => {
    setSearchInput("");
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, [inputCloseBtn]);

  useEffect(() => {
    const searchContainer = document.querySelector(".search__container");

    const searchNavBgColor = () => {
      const searchNavbar = document.querySelector(".search__navbar");
      searchNavbar.classList.toggle(
        "revertNavSearch",
        searchContainer.scrollTop > 0
      );
    };

    searchContainer.addEventListener("scroll", searchNavBgColor);
  }, []);

  return (
    <section className="search__container">
      <PrincipalNavbar className="search__navbar">
        <div className="search__navbar__input__container">
          <IoSearchOutline className="search__navbar__icon" />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            ref={searchInputRef}
            className="search__navbar__input"
            type="text"
            name=""
            id=""
            placeholder="¿Qué quieres reproducir?"
          />
          {inputCloseBtn ? (
            <IoMdClose
              onClick={() => eraseInputContent()}
              className="search__navbar__icon__close"
            />
          ) : null}
        </div>
      </PrincipalNavbar>
      <div className="search__section__container">
        <div className="search__title__container">
          <h1 className="search__title">Explorar todo</h1>
        </div>
        <div className="search__section__cards__container">
          <div className="search__section__card__container">
            {filteredData.length > 0 ? (
              filteredData.map((searchCard) => {
                return (
                  <PodcastsCard
                    key={searchCard.id}
                    style={{ background: searchCard.color }}
                    className="search__searchcard__body"
                  >
                    <h1 className="search__searchcard__title">
                      {searchCard.name}
                    </h1>
                    <img
                      className="search__searchcard__img"
                      src={searchCard.url}
                      alt=""
                    />
                  </PodcastsCard>
                );
              })
            ) : (
              <div className="search__noresults__container">
                <h1 className="search__noresults__title">
                  No se han encontrado resultados para "{searchInput}"
                </h1>
                <p className="saearch__noresults__paragraph">
                  Asegúrate de escribir las palabras de forma correcta o usa
                  menos o distintas palabras claves.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="principal__podcasts__footer__section">
        <PrincipalLinks className="principal__podcasts__links__section" />
      </div>
      <PrincipalFooter />
    </section>
  );
};

export default Search;
