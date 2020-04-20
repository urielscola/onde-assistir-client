import React from 'react';
import { FlexDiv, Image } from 'src/components';
import * as Styles from '../item-styles';

const sourcesImages = {
  'Amazon Prime Video': 'logos/primevideo.jpg',
  Netflix: 'logos/netflix.jpg',
  'Claro Video': 'logos/clarovideo.png',
  Crunchyroll: 'logos/crunchyroll.png',
  Globoplay: 'logos/globoplay.png',
  'Fox Play': 'logos/foxplay.jpg',
  'Fox Premium': 'logos/foxpremium.png',
  'Telecine Play': 'logos/telecine-play.jpg',
  'HBO Go': 'logos/hbo-go.png',
};

const ALLOWED_SOURCES = [
  'Amazon Prime Video',
  'Netflix',
  'Claro Video',
  'Crunchyroll',
  'Globoplay',
  'Fox Play',
  'Fox Premium',
  'Telecine Play',
  'HBO Go',
];

const Sources = ({ sources }) => (
  <FlexDiv>
    {sources.length &&
      sources
        .filter(source => ALLOWED_SOURCES.includes(source.name))
        .map(source => {
          return (
            <div key={source.name}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                <Styles.Badge>
                  <Image src={sourcesImages[source.name]} alt={source.name} />
                </Styles.Badge>
              </a>
            </div>
          );
        })}
  </FlexDiv>
);

export default Sources;
