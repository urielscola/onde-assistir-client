import React from 'react';
import { FlexDiv } from 'src/components';
import { ALLOWED_SOURCES, PRICING } from 'src/utils';
import { SourceItem, Pricing, SourceLink } from '../item-styles';

const sourcesImages = {
  'Amazon Prime Video': 'logos/primevideo_large.png',
  Netflix: 'logos/netflix_large.png',
  'Claro Video': 'logos/clarovideo_large.png',
  Crunchyroll: 'logos/crunchyroll_large.png',
  'Globo Play': 'logos/globoplay_large.png',
  'Fox Play': 'logos/foxplay_large.png',
  'Fox Premium': 'logos/foxpremium_large.png',
  'Telecine Play': 'logos/telecine-play_large.jpg',
  'HBO Go': 'logos/hbo-go_large.png',
};

const AMAZON_AFFILIATE = 'https://amzn.to/33CV2Ae';

const Sources = ({ sources }) =>  {
  return (
    <FlexDiv flexDirection="column">
      {sources && sources.length > 0 &&
        sources
          .filter(source => ALLOWED_SOURCES.includes(source.name))
          
          .map((source, index) => {
            return (
              <SourceItem key={source.name} isBestDeal={index === 0}>
                <div>
                  <img src={require(`../../../assets/images/${sourcesImages[source.name]}`)} alt={source.name} />
                  <Pricing isBestDeal={index === 0}>
                    <p>A partir de</p>
                    <h4>
                      <b>{PRICING[source.name].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</b>
                      /mês
                    </h4>
                  </Pricing>
                </div>
                <a href={source.name === 'Amazon Prime Video' ? AMAZON_AFFILIATE : source.url} target="_blank">
                  <SourceLink isBestDeal={index === 0}>
                    {index === 0 ? 'Assista agora' : 'Saiba mais'}
                  </SourceLink>
                </a>
              </SourceItem>
            );
          })}
          {!sources || sources.length === 0 && (
            <p>Não disponivel em serviços de stream no momento.</p>
          )}
    </FlexDiv>
  );
};

export default Sources;
