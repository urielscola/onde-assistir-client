import React from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Configure,
  connectStateResults,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { Scrollable } from 'src/components';
import Hit from './Hit';
import * as Styles from './styles';

const Results = connectStateResults(
  ({ searchState, searchResults, children }) => {
    if (searchState && searchState.query) {
      if (searchResults.nbHits !== 0) {
        return children;
      } else {
        return <Styles.NoResults>Nenhum resultado :(</Styles.NoResults>;
      }
    } else {
      return <div />;
    }
  }
);

const Search = props => {
  const { algolia } = props;
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

  return (
    <Styles.SearchWrapper>
      {algolia && algolia.appId && (
        <>
          <InstantSearch
            searchClient={searchClient}
            indexName={algolia.indexName}
          >
            <Configure hitsPerPage={7} distinct />
            <SearchBox
              translations={{ placeholder: 'onde assistir [...] online' }}
            />
            <Results>
              <Stats
                translations={{
                  stats(nbHits) {
                    return nbHits === 1
                      ? `${nbHits} resultado encontrado:`
                      : `${nbHits} resultados encontrados:`;
                  },
                }}
              />
              <Scrollable maxHeight="65vh">
                <Hits hitComponent={Hit} />
              </Scrollable>
            </Results>
          </InstantSearch>
        </>
      )}
    </Styles.SearchWrapper>
  );
};

export default Search;
