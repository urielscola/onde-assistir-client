import React from 'react';
import {
  Image,
  Responsive,
  FlexDiv,
  LabelValue,
  Spacing,
  ReadMore,
} from 'src/components';
import * as Styles from './item-styles';

const ItemMobile = ({
  payload,
  allowedSources,
  sourcesImages,
  ratingImages,
  data,
}) => {
  return (
    <Responsive.NotDesktop>
      <FlexDiv justifyContent="space-between">
        <Styles.Column maxWidth="40%">
          <Image src={data.cover.childImageSharp} />
        </Styles.Column>
        <Styles.Column maxWidth="55%">
          <Styles.Box>
            <Styles.Title>
              {payload.title} <span>({payload.year})</span>
            </Styles.Title>
            <FlexDiv alignItems="center">
              {payload.ratings.length &&
                payload.ratings.map(rating => {
                  return (
                    <Styles.Ratings>
                      <Image src={ratingImages[rating.name].childImageSharp} />
                      <p>{rating.value}</p>
                    </Styles.Ratings>
                  );
                })}
            </FlexDiv>
            {payload.seasons && (
              <LabelValue
                margin="5px 0"
                label="TEMPORADAS"
                value={payload.seasons}
              />
            )}
            {payload.runtime && (
              <LabelValue
                margin="5px 0"
                label="DURAÇÃO"
                value={payload.runtime}
              />
            )}
            {payload.tags.length && (
              <LabelValue
                isTags
                margin="5px 0"
                label="TAGS"
                value={payload.tags.join(', ')}
              />
            )}
          </Styles.Box>
        </Styles.Column>
      </FlexDiv>
      <Spacing appearence="small" />
      <Styles.Box>
        <Styles.Subtopic marginBottom="7px">ONDE ASSISTIR</Styles.Subtopic>
        <FlexDiv>
          {payload.sources.length &&
            payload.sources.map(source => {
              if (!allowedSources.includes(source.name)) return;
              return (
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  <Styles.Badge>
                    <Image src={sourcesImages[source.name].childImageSharp} />
                  </Styles.Badge>
                </a>
              );
            })}
        </FlexDiv>
      </Styles.Box>
      <Spacing appearence="small" />
      <Styles.Box>
        <Styles.Subtopic>SINOPSE</Styles.Subtopic>
        <ReadMore text={payload.description} />
      </Styles.Box>
    </Responsive.NotDesktop>
  );
};

export default ItemMobile;
