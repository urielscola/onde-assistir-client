import React, { useState } from 'react';

import { Icon } from 'src/components';
import { api } from 'src/services';

import * as Styles from './styles';

let throttle;

const SearchBar = ({ ResultComponent }) => {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const search = title => {
    clearTimeout(throttle);

    throttle = setTimeout(async () => {
      setLoading(true);
      setShowResults(title.length > 2);

      if (title.length > 2) {
        try {
          const { list } = await api.search({ title }, { per_page: 6 });
          setResults(list);
        } catch (err) {
          console.log(err);
        }
      } else {
        setResults(null);
      }
      
      setLoading(false);
    }, 400);
  };

  return (
    <Styles.Container>
      <input
        type="text"
        placeholder="O que você quer assitir hoje?"
        onChange={e => search(e.target.value)}
        onFocus={() => setShowResults(true)}
        autoFocus={true}
      />
      <Icon
        position="absolute"
        right="3.5%"
        top="50%"
        className="search-icon"
        variant={loading ? "load" : "search"}
        size={30}
      />
      <ResultComponent showResults={showResults} results={results} loading={loading} setShowResults={setShowResults} />
    </Styles.Container>
  );
};

export default SearchBar;
