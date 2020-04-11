import React from 'react';
import { Responsive, Container, Icon, Spacing } from 'src/components';
import { useApplicationContext } from 'src/contexts/application';
import Algolia from './algolia';
import * as Styles from './styles';

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_ONLY_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const Search = () => {
  const { isSearchOpen, toggleSearch } = useApplicationContext();

  return (
    <Styles.Overlay isOpen={isSearchOpen}>
      <Container position="relative">
        <Icon
          variant="close"
          onClick={toggleSearch}
          color="#fff"
          position="absolute"
          right="10px"
          top="20px"
        />
        <Spacing apperance="x-large" />
        <div>
          <Styles.Title marginTop="10px">pesquisar</Styles.Title>
          <Algolia algolia={algolia} />
        </div>
      </Container>
    </Styles.Overlay>
  );
};

export default Search;
