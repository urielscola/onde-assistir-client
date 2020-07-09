import React from 'react';
import { useApplicationContext } from 'src/contexts/application';
import { theme } from 'src/assets/styles';
import { Container, FlexDiv, Icon } from 'src/components';
import * as Styles from '../styles';

const Bar = ({ count }) => {
  const { toggleFilters, isFiltersOpen } = useApplicationContext();
  return (
    <Styles.FilterContainer>
      <Container>
        <FlexDiv alignItems="center" justifyContent="space-between">
          <p>{count.toLocaleString()} resultados</p>
          <Icon
            variant="filter"
            color={isFiltersOpen ? theme.brandSecundary : theme.gray}
            onClick={toggleFilters}
          />
        </FlexDiv>
      </Container>
    </Styles.FilterContainer>
  )
};

export default Bar;