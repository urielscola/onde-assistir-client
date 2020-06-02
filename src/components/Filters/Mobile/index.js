import React from 'react';
import {
  FlexDiv,
  Topic,
  Badge,
  Scrollable,
  Responsive
} from 'src/components';
import { TAGS, TYPES, SOURCES_OPTIONS } from 'src/utils';
import { useApplicationContext } from 'src/contexts/application';
import * as Styles from '../styles';

const Filters = ({ filters, handleChange }) => {
  const { toggleFilters, isFiltersOpen } = useApplicationContext();

  return (
    <Responsive.NotDesktop>
      <Styles.FilterBar isOpen={isFiltersOpen}>
        <Scrollable maxHeight="calc(100vh - 300px)" className="filters">
          <Topic title="Filtrar">
            <Styles.FilterTitle>STREAMS</Styles.FilterTitle>
            <FlexDiv flexWrap="wrap" marginBottom="25px">
              {SOURCES_OPTIONS.map(source => (
                <Styles.BadgeContainer
                  key={source.value}
                  active={filters.sources.length === 0 || filters.sources.includes(source.value)}
                  onClick={() => handleChange('sources', source.value)}
                >
                  <Badge src={source.path} />
                </Styles.BadgeContainer>
              ))}
            </FlexDiv>

            <Styles.FilterTitle>CATEGORIAS</Styles.FilterTitle>
            <Styles.ListContainer>
              {TYPES.map(type => (
                <Styles.ListItem
                  key={type.value}
                  active={filters.type.includes(type.value)}
                  onClick={() => handleChange('type', type.value)}
                >
                  <p>{type.label}</p>
                </Styles.ListItem>
              ))}
            </Styles.ListContainer>

            <Styles.FilterTitle>TAGS</Styles.FilterTitle>
            <Styles.ListContainer>
              {TAGS.map(tag => (
                <Styles.ListItem
                  key={tag}
                  active={filters.tags.includes(tag)}
                  onClick={() => handleChange('tags', tag)}
                >
                  <p>{tag}</p>
                </Styles.ListItem>
              ))}
            </Styles.ListContainer>
          </Topic>
        </Scrollable>
      </Styles.FilterBar>
      <Styles.FilterBarOffset isOpen={isFiltersOpen} onClick={toggleFilters} />
    </Responsive.NotDesktop>
  );
};

export default Filters;
