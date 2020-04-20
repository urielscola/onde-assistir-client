import React, { createContext, useContext, useState } from 'react';
import { toggleWindowBody } from 'src/utils';

const ApplicationContext = createContext({});
const useApplicationContext = () => useContext(ApplicationContext);

const ApplicationProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = payload => {
    toggleWindowBody(payload);
    setIsSearchOpen(false);
    return setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = payload => {
    toggleWindowBody(payload);
    setIsMenuOpen(false);
    return setIsSearchOpen(!isSearchOpen);
  };

  const value = {
    toggleMenu,
    toggleSearch,
    isMenuOpen,
    isSearchOpen,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationProvider, ApplicationContext, useApplicationContext };
