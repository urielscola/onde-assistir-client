import React from 'react';
import { Link } from 'gatsby';
import {
  Slider,
  Topic,
  Spacing,
  Container,
  FlexDiv,
  Responsive,
} from 'src/components';
import * as Styles from './styles';

const ITEMS = [
  {
    label: 'Filmes',
    link: '/catalogo?type=movie',
    cover: 'https://dfn8uuw9d31r.cloudfront.net/5e874d86d0467c5158d2d7fd.png',
  },
  {
    label: 'Séries',
    link: '/catalogo?type=serie',
    cover: 'https://dfn8uuw9d31r.cloudfront.net/5e917210e776b82bd0a1e3d1.png',
  },
  {
    label: 'Animes',
    link: '/catalogo?tags=Anime',
    cover: 'https://dfn8uuw9d31r.cloudfront.net/5e9171bffe10ba1c0ca6f5f4.png',
  },
];

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [],
};

const Categories = () => {
  return (
    <Styles.Container>
      <Responsive.NotDesktop>
        <Topic title="CATEGORIAS">
          <Slider settings={sliderSettings}>
            {ITEMS.map(item => (
              <Link to={item.link} title={item.label} key={item.label}>
                <Styles.Category>
                  <h3>{item.label}</h3>
                  <img src={item.cover} alt={item.label} />
                </Styles.Category>
              </Link>
            ))}
          </Slider>
        </Topic>
      </Responsive.NotDesktop>
      <Responsive.Desktop>
        <Spacing size="medium" />
        <Container>
          <Topic title="CATEGORIAS">
            <FlexDiv justifyContent="space-between">
              {ITEMS.map(item => (
                <Link to={item.link} title={item.label} key={item.label}>
                  <Styles.Category>
                    <h3>{item.label}</h3>
                    <img src={item.cover} alt={item.label} />
                  </Styles.Category>
                </Link>
              ))}
            </FlexDiv>
          </Topic>
        </Container>
        <Spacing size="medium" />
      </Responsive.Desktop>
    </Styles.Container>
  );
};

export default Categories;
