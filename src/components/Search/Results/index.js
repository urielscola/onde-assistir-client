import React, { useCallback, useRef } from 'react';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { Thumb, FlexDiv, Scrollable } from 'src/components';
import * as Styles from './styles';
import { useOnClickOutside } from 'src/utils';

const Results = ({ showResults, results, loading, setShowResults }) => {
  const ref = useRef();
  useOnClickOutside(ref, useCallback(() => setShowResults(false), [setShowResults]));
  const isMobile = useMediaQuery({ maxWidth: 992 })

  return (
    <Styles.Container isOpen={results && results.length > 0 && showResults} ref={ref}>
      <Scrollable maxHeight="250px">
        {!loading && results && results.length > 0 && showResults && (
          <FlexDiv flexWrap="wrap">
            {results.map(result => (
              <FlexDiv width={isMobile ? '100%' : '50%'} marginBottom="10px" key={result.id + result.sources + result.slug}>
                <Styles.ResultImage>
                  <Thumb thumb={result} showInfo={false} />
                </Styles.ResultImage>
                <Link to={result.slug}>
                  <Styles.ResultInfo>
                    <p>{result.title}</p>
                    <p>
                      {result.sources} {result.sources === 1 ? 'fonte' : 'fontes'}
                    </p>
                  </Styles.ResultInfo>
                </Link>
              </FlexDiv>
            ))}
          </FlexDiv>
        )}

        {!loading && results && results.length === 0 && showResults && (
          <Styles.ResultInfo>
            <span>Nenhum resultado</span>
          </Styles.ResultInfo>
        )}
      </Scrollable>
    </Styles.Container >
  );
};

export default Results;
