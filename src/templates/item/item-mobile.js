import React from 'react';
import {
  Image,
  Responsive,
  FlexDiv,
  LabelValue,
  Container,
  Spacing,
  ReadMore,
  Topic,
} from 'src/components';
import * as Styles from './item-styles';
import { Infos, Sources, Ratings } from './partials';

const ItemMobile = ({
  payload,
  allowedSources,
  sourcesImages,
  ratingImages,
  data,
}) => {
  return (
    <Responsive.NotDesktop>
      <Styles.Bar bg={payload.theme} />
      <Container>
        <FlexDiv marginTop="-28vh" justifyContent="space-between">
          <Styles.Column maxWidth="50%">
            <Styles.Year>{payload.year}</Styles.Year>
            <Styles.Title>{payload.title}</Styles.Title>
            <Ratings ratings={payload.ratings} ratingImages={ratingImages} />
          </Styles.Column>
          <Styles.Column maxWidth="50">
            <Image src={data.cover.childImageSharp} />
          </Styles.Column>
        </FlexDiv>

        <Topic title="sinopse" color={payload.theme}>
          <ReadMore text={payload.description} />
        </Topic>
        <Spacing appearence="small" />

        <Topic
          title="onde assistir online"
          marginBottom="15px"
          color={payload.theme}
        >
          <Sources
            sources={payload.sources}
            allowedSources={allowedSources}
            sourcesImages={sourcesImages}
          />
        </Topic>
        <Infos payload={payload} />
        <Spacing appearence="medium" />

        <Topic title="você também pode gostar" color={payload.theme} />
      </Container>
    </Responsive.NotDesktop>
  );
};

export default ItemMobile;
