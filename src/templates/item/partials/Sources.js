import React from 'react';
import { FlexDiv, Badge } from 'src/components';

const sourcesImages = {
  'Amazon Prime Video': 'logos/primevideo.jpg',
  Netflix: 'logos/netflix.jpg',
  'Claro Video': 'logos/clarovideo.png',
  Crunchyroll: 'logos/crunchyroll.png',
  'Globo Play': 'logos/globoplay.png',
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
  'Globo Play',
  'Fox Play',
  'Fox Premium',
  'Telecine Play',
  'HBO Go',
];

const Sources = ({ sources }) => (
  <FlexDiv>
    {sources.length > 0 &&
      sources
        .filter(source => ALLOWED_SOURCES.includes(source.name))
        .map(source => {
          return (
            <div key={source.name}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                <Badge src={sourcesImages[source.name]} alt={source.name} />
              </a>
            </div>
          );
        })}
  </FlexDiv>
);

export default Sources;
