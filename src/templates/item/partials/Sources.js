import React from 'react';
import { FlexDiv, Image } from 'src/components';
import * as Styles from '../item-styles';

const Sources = ({ sources, sourcesImages, allowedSources }) => (
  <FlexDiv>
    {sources.length &&
      sources.map(source => {
        if (!allowedSources.includes(source.name)) return;
        return (
          <div key={source.name}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              <Styles.Badge>
                <Image src={sourcesImages[source.name].childImageSharp} />
              </Styles.Badge>
            </a>
          </div>
        );
      })}
  </FlexDiv>
);

export default Sources;
