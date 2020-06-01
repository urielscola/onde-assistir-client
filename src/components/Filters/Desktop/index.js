import React from 'react';
import { Container, FlexDiv, Badge, Responsive } from 'src/components';
import { TAGS_OPTIONS, TYPES, SOURCES_OPTIONS } from 'src/utils';
import Options from './Options';
import * as Styles from '../styles';
import { BadgeContainer } from '../styles';


const Desktop = ({ filters, handleChange }) => {
  return (
    <Responsive.Desktop>
      <Styles.FilterContainer>
        <Container>
          <FlexDiv alignItems="center" justifyContent="space-between">
            <FlexDiv>
              <Options title="TAGS" list={TAGS_OPTIONS} sKey="tags" filters={filters} handleChange={handleChange} isActive={filters.tags.length > 0} />
              <Options title="CATEGORIAS" list={TYPES} sKey="type" filters={filters} handleChange={handleChange} isActive={filters.type.length > 0} />
            </FlexDiv>
            <FlexDiv flexWrap="wrap">
              {SOURCES_OPTIONS.map(source => (
                <BadgeContainer
                  key={source.value}
                  active={filters.sources.includes(source.value)}
                  onClick={() => handleChange('sources', source.value)}
                >
                  <Badge src={source.path} marginBottom="0" />
                </BadgeContainer>
              ))}
            </FlexDiv>
          </FlexDiv>
        </Container>
      </Styles.FilterContainer>
    </Responsive.Desktop>
  )
};

export default Desktop;