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
          </Styles.Column>
          <Styles.Column maxWidth="50">
            <Image src={data.cover.childImageSharp} />
          </Styles.Column>
        </FlexDiv>

        <Topic title="sinopse">
          <ReadMore text={payload.description} />
        </Topic>
        <Spacing appearence="small" />

        <Topic title="onde assistir online" marginBottom="15px">
          <FlexDiv>
            {payload.sources.length &&
              payload.sources.map(source => {
                if (!allowedSources.includes(source.name)) return;
                return (
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Styles.Badge>
                        <Image
                          src={sourcesImages[source.name].childImageSharp}
                        />
                      </Styles.Badge>
                    </a>
                  </div>
                );
              })}
          </FlexDiv>
        </Topic>

        {payload.seasons && (
          <LabelValue
            margin="5px 0"
            label="TEMPORADAS"
            value={payload.seasons}
          />
        )}
        {payload.runtime && (
          <LabelValue margin="5px 0" label="DURAÇÃO" value={payload.runtime} />
        )}
        {payload.tags.length && (
          <LabelValue
            isTags
            margin="5px 0"
            label="TAGS"
            value={payload.tags.join(', ')}
          />
        )}

        <Spacing appearence="medium" />

        <Topic title="você também pode gostar" />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Responsive.NotDesktop>
  );
};

export default ItemMobile;

{
  /* <FlexDiv justifyContent="space-between">
<Styles.Column maxWidth="40%">
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
              <Image
                src={ratingImages[rating.name].childImageSharp}
              />
              <p>{rating.value}</p>
            </Styles.Ratings>
          );
        })}
    </FlexDiv>

  </Styles.Box>
</Styles.Column>
</FlexDiv>
<Spacing appearence="small" />
<Styles.Box>
<Styles.Subtopic marginBottom="7px">ONDE ASSISTIR</Styles.Subtopic>

</Styles.Box>
<Spacing appearence="small" />
<Styles.Box>
<Styles.Subtopic>SINOPSE</Styles.Subtopic>

</Styles.Box> */
}
