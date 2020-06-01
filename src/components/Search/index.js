import React, { useEffect } from 'react';
import { Container } from 'src/components';
import { useApplicationContext } from 'src/contexts/application';
import { default as SearchBar } from 'src/components/Header/partials/Search'
import Results from './Results';
import * as Styles from './styles';


const Search = () => {
  const { isSearchOpen, toggleSearch } = useApplicationContext();

  useEffect(() => {
    if (isSearchOpen) {
      document.querySelector('.overlay input').focus();
    }
  }, [isSearchOpen]);
  return (
    <Styles.Container isOpen={isSearchOpen} className="overlay">
      <Container position="relative">
        <SearchBar ResultComponent={Results} />
      </Container>
    </Styles.Container>
  );
};

export default Search;
