import React from 'react';
import { Container, Icon, Spacing } from 'src/components';
import { useApplicationContext } from 'src/contexts/application';
import Algolia from './Algolia';
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
          onClick={() => toggleSearch('visible')}
          color="#fff"
          position="absolute"
          right="20px"
          top="20px"
        />
        <Spacing apperance="x-large" />
        <div>
          <Styles.Title marginTop="10px">pesquisar</Styles.Title>
          <Algolia algolia={algolia} />
          <Styles.SearchCredits>
            Powered by Algolia
            <Icon variant="algolia" marginLeft="10px" color="#fff" />
          </Styles.SearchCredits>
        </div>
      </Container>
    </Styles.Overlay>
  );
};

export default Search;
