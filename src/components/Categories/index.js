import React from 'react';
import { Link } from 'gatsby';
import {
  PlayButton,
  Topic,
  FlexDiv,
  Responsive,
} from 'src/components';
import * as Styles from './styles';
import movies from 'src/assets/images/movies-cover.png';
import series from 'src/assets/images/series-cover.png';
import animes from 'src/assets/images/animes-cover.png';

const ITEMS = [
  {
    label: 'Filmes',
    link: '/catalogo?type=movie',
    cover: movies,
  },
  {
    label: 'Séries',
    link: '/catalogo?type=serie',
    cover: series,
  },
  {
    label: 'Animes',
    link: '/catalogo?tags=Anime',
    cover: animes,
  },
];

const Categories = () => {
  return (
    <Styles.Container>
      <Topic title="Categorias">
        <Responsive.Desktop>
          <FlexDiv justifyContent="space-between">
            {ITEMS.map(item => (
              <Link to={item.link} title={item.label} key={item.label}>
                <Styles.Category>
                  <PlayButton title={item.label} />
                  <img src={item.cover} alt={item.label} />
                </Styles.Category>
              </Link>
            ))}
          </FlexDiv>
        </Responsive.Desktop>
        <Responsive.NotDesktop>
          <FlexDiv justifyContent="space-between" flexDirection="column">
            {ITEMS.map(item => (
              <Link to={item.link} title={item.label} key={item.label}>
                <Styles.Category>
                  <PlayButton title={item.label} />
                  <img src={item.cover} alt={item.label} />
                </Styles.Category>
              </Link>
            ))}
          </FlexDiv>
        </Responsive.NotDesktop>
      </Topic>
    </Styles.Container>
  );
};

export default Categories;
