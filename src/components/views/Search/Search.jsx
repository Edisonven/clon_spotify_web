import { useRef, useEffect, useContext } from "react";
import PrincipalNavbar from "../../PrincipalNavbar/PrincipalNavbar";
import "../Search/search.css";
import { IoSearchOutline } from "react-icons/io5";
import { SearchContext } from "../../contexts/SearchContext";
import PodcastsCard from "../Podcasts/PodcastsCard/PodcastsCard";
import PrincipalLinks from "../../PrincipalLinks/PrincipalLinks";
import PrincipalFooter from "../../PrincipalFooter/PrincipalFooter";

const Search = () => {
  const { searchData } = useContext(SearchContext);

  const searchInputRef = useRef();

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

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
        <div className="search__section__cards__container">
          <div className="search__section__card__container">
            {searchData.map((searchCard) => {
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
            })}
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
