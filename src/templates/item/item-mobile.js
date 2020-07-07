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
  Breadcrumb,
} from 'src/components';
import * as Styles from './item-styles';
import noImage from 'src/assets/images/no-cover.png';
import { Infos, Sources, Ratings } from './partials';

const ItemMobile = ({ payload, related, validSources }) => {
  const [id] = payload.cover ? payload.cover.split('.') : [null];
  const image = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + payload.cover : noImage;
  const placeholder = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + id + '_thumb.png' : noImage;

  return (
    <Responsive.NotDesktop>
      <Styles.CustomBar>
        <Container position="relative" top="5vh">
          <Breadcrumb items={[{ label: payload.title }]} />
          <Spacing appearence="small" />
          <Styles.Title>{payload.title}</Styles.Title>
          <FlexDiv justifyContent="space-between">
            <Styles.Column maxWidth="45%">
              <Image
                alt={payload.title}
                src={image}
                placeholder={placeholder}
              />
            </Styles.Column>
            <Styles.Column maxWidth="50%">
              <Styles.Year>{payload.year}</Styles.Year>
              <Ratings ratings={payload.ratings} />
            </Styles.Column>
          </FlexDiv>
        </Container>

      </Styles.CustomBar>
      <Container>
        <Spacing appearence="x-small" />

        {validSources && (
          <Topic
            title="Disponível em:"
            marginBottom="15px"
          >
            <Sources sources={validSources} />
          </Topic>
        )}

        {payload.description && (
          <>
            <Topic title="Sinopse:">
              <ReadMore text={payload.description} />
            </Topic>
            <Spacing appearence="x-small" />
          </>
        )}

        <Spacing appearence="small" />
        <Infos payload={payload} />
        <Spacing appearence="medium" />
        {related && related.length > 0 && (
          <>
            <Topic title="Títulos similares" />
            <Spacing appearence="x-small" />
            <FlexDiv flexWrap="wrap" justifyContent="space-between">
              {related.map(item => (
                <Thumb thumb={item} key={item.cover} />
              ))}
            </FlexDiv>
          </>
        )}
        <Spacing appearence="small" />
      </Container>
    </Responsive.NotDesktop>
  );
};

export default ItemMobile;
