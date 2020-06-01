import React from 'react';
import { useApplicationContext } from 'src/contexts/application';
import { theme } from 'src/assets/styles';
import { Container, FlexDiv, Icon, Responsive } from 'src/components';
import * as Styles from '../styles';

const Bar = ({ count }) => {
  const { toggleFilters, isFiltersOpen } = useApplicationContext();
  return (
    <Responsive.NotDesktop>
      <Styles.FilterContainer>
        <Container>
          <FlexDiv alignItems="center" justifyContent="space-between">
            <p>{count} resultados encontrados</p>
            <Icon
              variant="filter"
              color={isFiltersOpen ? theme.brandSecundary : theme.gray}
              onClick={toggleFilters}
            />
          </FlexDiv>
        </Container>
      </Styles.FilterContainer>
    </Responsive.NotDesktop>
  )
};

export default Bar;