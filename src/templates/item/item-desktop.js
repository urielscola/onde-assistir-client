import React from 'react';
import {
  Image,
  Responsive,
  FlexDiv,
  Spacing,
  Topic,
  Thumb,
  Container,
  ReadMore,
} from 'src/components';
import * as Styles from './item-styles';
import { Infos, Sources, Ratings } from './partials';

const ItemDesktop = ({
  payload,
  allowedSources,
  sourcesImages,
  related,
  ratingImages,
  data,
}) => {
  return (
    <Responsive.Desktop>
      <Styles.Bar bg={payload.theme} />
      <Container>
        <FlexDiv marginTop="-120px" justifyContent="space-between">
          <Styles.Column maxWidth="70%">
            <FlexDiv>
              <Styles.Column maxWidth="200px">
                <FlexDiv flexDirection="column">
                  <Image src={data.cover.childImageSharp} />
                  <Spacing appearence="small" />

                  <Infos payload={payload} />
                </FlexDiv>
              </Styles.Column>
              <Styles.Column marginLeft="35px">
                <Styles.Year>{payload.year}</Styles.Year>
                <Styles.Title>{payload.title}</Styles.Title>
                <Ratings
                  ratings={payload.ratings}
                  ratingImages={ratingImages}
                />
                <Spacing appearence="large" />

                <Topic title="sinopse" color={payload.theme}>
                  <ReadMore text={payload.description} visible={220} />
                </Topic>
                <Spacing appearence="x-small" />

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
              </Styles.Column>
            </FlexDiv>
          </Styles.Column>
          <Styles.Column maxWidth="25%"></Styles.Column>
        </FlexDiv>
        <Spacing appearence="x-large" />

        <Topic title="você também pode gostar" />
        <Spacing appearence="x-small" />
        <FlexDiv justifyContent="space-between" flexWrap="wrap">
          {related.edges
            .filter(item => !!item.node.cover)
            .map(item => (
              <Thumb thumb={item} key={item.slug} />
            ))}
        </FlexDiv>
        <Spacing appearence="x-large" />
      </Container>
    </Responsive.Desktop>
  );
};

export default ItemDesktop;
