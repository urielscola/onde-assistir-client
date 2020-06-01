import React, { createContext, useContext, useState } from 'react';
import { toggleWindowBody } from 'src/utils';

const ApplicationContext = createContext({});
const useApplicationContext = () => useContext(ApplicationContext);

const ApplicationProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleMenu = () => {
    toggleWindowBody(isFiltersOpen || !isMenuOpen);
    return setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    return setIsSearchOpen(!isSearchOpen);
  };

  const toggleFilters = () => {
    toggleWindowBody(!isFiltersOpen || isMenuOpen);
    return setIsFiltersOpen(!isFiltersOpen);
  };

  const value = {
    toggleMenu,
    toggleSearch,
    isMenuOpen,
    isSearchOpen,
    toggleFilters,
    isFiltersOpen
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext, useApplicationContext };
