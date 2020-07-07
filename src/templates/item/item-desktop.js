import React from 'react';
import {
  Image,
  Responsive,
  FlexDiv,
  Spacing,
  Topic,
  Thumb,
  Container,
  Breadcrumb,
} from 'src/components';
import * as Styles from './item-styles';
import noImage from 'src/assets/images/no-cover.png';
import { Infos, Sources, Ratings } from './partials';

const ItemDesktop = ({ payload, related, validSources }) => {
  const [id] = payload.cover ? payload.cover.split('.') : [null];
  const image = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + payload.cover : noImage;
  const placeholder = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + id + '_thumb.png' : noImage;

  return (
    <Responsive.Desktop>
      <Styles.CustomBar>
        <Container>
          <Spacing appearence="small" />
          <Breadcrumb items={[{ label: payload.title }]} />
        </Container>
      </Styles.CustomBar>
      <Container>

        <FlexDiv marginTop="-125px" justifyContent="space-between">
          <Styles.Column maxWidth="100%">
            <FlexDiv>
              <Styles.Column maxWidth="200px">
                <FlexDiv flexDirection="column">
                  <Image
                    alt={payload.title}
                    src={image}
                    placeholder={placeholder}
                  />
                  <Spacing appearence="small" />

                  <Infos payload={payload} />
                </FlexDiv>
              </Styles.Column>
              <Styles.Column marginLeft="35px">
                <Styles.Year>{payload.year}</Styles.Year>
                <Styles.Title>{payload.title}</Styles.Title>
                <Ratings ratings={payload.ratings} />
                <Spacing appearence="large" />
                <Spacing appearence="small" />

                {validSources && (
                  <Topic
                    title="Disponível em:"
                    marginBottom="15px"
                  >
                    <Sources sources={validSources} />
                  </Topic>
                )}

                <Spacing appearence="small" />

                {payload.description && (
                  <div style={{ maxWidth: '660px' }}>
                    <Topic title="Sinopse:">
                      <Styles.Description>
                        {payload.description}
                      </Styles.Description>
                    </Topic>
                    <Spacing appearence="x-small" />
                  </div>
                )}
                <Spacing appearence="x-small" />
              </Styles.Column>
            </FlexDiv>
          </Styles.Column>
          {/* <Styles.Column maxWidth="25%"></Styles.Column> */}
        </FlexDiv>
        <Spacing appearence="x-large" />

        {related && related.length > 0 && (
          <>
            <Topic title="Títulos similares" />
            <Spacing appearence="x-small" />
            <FlexDiv justifyContent="space-between" flexWrap="wrap">
              {related.map(item => (
                <Thumb thumb={item} key={item.cover} />
              ))}
            </FlexDiv>
          </>
        )}
        <Spacing appearence="small" />
      </Container>
    </Responsive.Desktop>
  );
};

export default ItemDesktop;
