import React from 'react';
import { Link } from 'gatsby';
import { FlexDiv, Spacing } from 'src/components';
import * as Styles from './styles';

const Hit = ({ hit }) => (
  <Styles.HitContainer>
    <Link to={hit.slug} title={hit.title}>
      <FlexDiv flexDirection="column">
        <p>{hit.title}</p>
        <span>
          disponível em <b>{hit.sources.length}</b> fontes
        </span>
      </FlexDiv>
    </Link>
  </Styles.HitContainer>
);

export default Hit;
