import React from 'react';
import { Link } from 'gatsby';
import { useApplicationContext } from 'src/contexts/application';
import { FlexDiv } from 'src/components';
import * as Styles from './styles';

const Hit = ({ hit }) => {
  const { toggleSearch } = useApplicationContext();

  return (
    <Styles.HitContainer>
      <Link
        to={hit.slug}
        title={hit.title}
        onClick={() => toggleSearch('visible')}
      >
        <FlexDiv flexDirection="column">
          <p>{hit.title}</p>
          <span>
            disponível em <b>{hit.sources.length}</b>{' '}
            {hit.sources.length > 1 ? 'fontes' : 'fonte'}
          </span>
        </FlexDiv>
      </Link>
    </Styles.HitContainer>
  );
};

export default Hit;
