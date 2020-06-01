import React, { useState } from 'react';
import { Icon } from 'src/components';
import { api } from 'src/services';
import * as Styles from './styles';

let throttle;
const Search = ({ onClick, ResultComponent }) => {
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
        placeholder="onde assistir online?"
        onChange={e => search(e.target.value)}
        onFocus={() => setShowResults(true)}
        tabIndex="-1"
      />
      <Icon
        position="absolute"
        right="10px"
        top="8px"
        variant="search"
        size={25}
      />
      <ResultComponent showResults={showResults} results={results} loading={loading} setShowResults={setShowResults} />
    </Styles.Container>
  );
};

export default Search;
