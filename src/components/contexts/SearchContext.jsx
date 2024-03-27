import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

const searchUrl = "/exploreall.json";

const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);

  const getSearchData = async () => {
    const response = await fetch(searchUrl);
    const data = await response.json();
    setSearchData(data);
  };
  useEffect(() => {
    getSearchData();
  }, []);

  return (
    <SearchContext.Provider value={{ searchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
