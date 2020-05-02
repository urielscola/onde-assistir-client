import React from 'react';
import {
  Image,
  Responsive,
  FlexDiv,
  Container,
  Spacing,
  ReadMore,
  Thumb,
  Topic,
  Slider,
} from 'src/components';
import * as Styles from './item-styles';
import { Infos, Sources, Ratings } from './partials';

const ItemMobile = ({ payload, related }) => {
  const [id] = payload.cover.split('.');

  return (
    <Responsive.NotDesktop>
      <Styles.Bar bg={payload.theme} />
      <Container>
        <FlexDiv marginTop="-28vh" justifyContent="space-between">
          <Styles.Column maxWidth="50%">
            <Styles.Year>{payload.year}</Styles.Year>
            <Styles.Title>{payload.title}</Styles.Title>
            <Ratings ratings={payload.ratings} />
          </Styles.Column>
          <Styles.Column maxWidth="50">
            <Image
              src={payload.cover}
              alt={payload.title}
              src={'https://dfn8uuw9d31r.cloudfront.net/' + payload.cover}
              placeholder={
                'https://dfn8uuw9d31r.cloudfront.net/' + id + '_thumb.png'
              }
            />
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
          <Sources sources={payload.sources} />
        </Topic>
        <Infos payload={payload} />
        <Spacing appearence="medium" />
        {related.length > 0 && (
          <>
            <Topic title="você também pode gostar" color={payload.theme} />
            <Spacing appearence="x-small" />
            <Slider>
              {related.map(item => (
                <Thumb thumb={item} key={item.node.cover} />
              ))}
            </Slider>
          </>
        )}
        <Spacing appearence="large" />
      </Container>
    </Responsive.NotDesktop>
  );
};

export default ItemMobile;
