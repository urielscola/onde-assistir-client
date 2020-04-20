import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  SEO,
  Container,
  Layout,
  Topic,
  Slider,
  Thumb,
  Responsive,
  Spacing,
  Category,
  FlexDiv,
  Banner,
} from '../components';
import { CATEGORIES } from 'src/utils';

const SERIES = [
  {
    node: {
      title: 'La Casa de Papel',
      slug: 'la-casa-de-papel',
      cover: 'la-casa-de-papel.png',
    },
  },
  {
    node: {
      title: 'The Walking Dead',
      slug: 'the-walking-dead',
      cover: 'the-walking-dead.png',
    },
  },
  { node: { title: 'Peppa Pig', slug: 'peppa-pig', cover: 'peppa-pig.png' } },
  {
    node: {
      title: 'The Witcher',
      slug: 'the-witcher',
      cover: 'the-witcher.png',
    },
  },
  {
    node: {
      title: 'Como Defender um Assassino',
      slug: 'como-defender-um-assassino',
      cover: 'como-defender-um-assassino.png',
    },
  },
  {
    node: {
      title: 'Orange is the New Black',
      slug: 'orange-is-the-new-black',
      cover: 'orange-is-the-new-black.png',
    },
  },
];

const MOVIES = [
  {
    node: {
      title: 'Eu sou a lenda',
      slug: 'eu-sou-a-lenda',
      cover: 'eu-sou-a-lenda.png',
    },
  },
  {
    node: {
      title: 'Procurando Dory',
      slug: 'procurando-dory',
      cover: 'procurando-dory.png',
    },
  },
  { node: { title: 'Bird Box', slug: 'bird-box', cover: 'bird-box.png' } },
  { node: { title: 'Noé', slug: 'noe', cover: 'noe.png' } },
  { node: { title: 'O Durão', slug: 'o-durao', cover: 'o-durao.png' } },
  {
    node: {
      title: 'O Melhor de Mim',
      slug: 'o-melhor-de-mim',
      cover: 'o-melhor-de-mim.png',
    },
  },
];

const ANIMES = [
  {
    node: {
      title: 'Naruto Shippuuden',
      slug: 'naruto-shippuuden',
      cover: 'naruto-shippuuden.png',
    },
  },
  {
    node: {
      title: 'Demon Slayer: Kimetsu no Yaiba',
      slug: 'demon-slayer-kimetsu-no-yaiba',
      cover: 'demon-slayer-kimetsu-no-yaiba.png',
    },
  },
  {
    node: {
      title: 'One-Punch Man',
      slug: 'one-punch-man',
      cover: 'one-punch-man.png',
    },
  },
  {
    node: {
      title: 'Fullmetal Alchemist: Brotherhood',
      slug: 'fullmetal-alchemist-brotherhood',
      cover: 'fullmetal-alchemist-brotherhood.png',
    },
  },
  { node: { title: 'HAIKYU!!', slug: 'haikyu', cover: 'haikyu.png' } },
  {
    node: {
      title: 'Death Note',
      slug: 'death-note',
      cover: 'death-note.png',
    },
  },
];

const Home = () => {
  const items = useStaticQuery(graphql`
    query {
      meta: site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Onde Assistir Online">
        <link rel="canonical" href={items.meta.siteMetadata.siteUrl} />
      </SEO>
      <Banner />
      <Spacing appearence="medium" />

      <div>
        <Container>
          <Topic title="categorias" />
          <Spacing appearence="x-small" />
          <Responsive.NotDesktop>
            <Slider
              settings={{
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    },
                  },
                ],
              }}
            >
              {CATEGORIES.map(category => (
                <Category key={category.title} category={category} />
              ))}
            </Slider>
            <Spacing appearence="small" />
          </Responsive.NotDesktop>
          <Responsive.Desktop>
            <FlexDiv flexWrap="wrap" justifyContent="space-between">
              {CATEGORIES.map(category => (
                <Category key={category.title} category={category} />
              ))}
            </FlexDiv>
          </Responsive.Desktop>
        </Container>
      </div>
      <Spacing appearence="large" />

      <Container>
        <Responsive.NotDesktop>
          <Topic title="filmes populares" />
          <Spacing appearence="x-small" />
          <Slider>
            {MOVIES.map(item => (
              <Thumb thumb={item} key={item.cover} />
            ))}{' '}
          </Slider>
          <Spacing appearence="x-large" />
          <Topic title="series populares" />
          <Spacing appearence="x-small" />
          <Slider>
            {SERIES.map(item => (
              <Thumb thumb={item} key={item.cover} />
            ))}
          </Slider>
          <Spacing appearence="x-large" />
          <Topic title="animes populares" />
          <Spacing appearence="x-small" />
          <Slider>
            {ANIMES.map(item => (
              <Thumb thumb={item} key={item.cover} />
            ))}
          </Slider>
          <Spacing appearence="x-large" />
        </Responsive.NotDesktop>
        <Responsive.Desktop>
          <Topic title="filmes populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {MOVIES.map(item => (
              <Thumb thumb={item} key={item.cover} />
            ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="séries populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {SERIES.map(item => (
              <Thumb thumb={item} key={item.cover} />
            ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="animes populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {ANIMES.map(item => (
              <Thumb thumb={item} key={item.cover} />
            ))}
          </FlexDiv>
          <Spacing appearence="large" />
        </Responsive.Desktop>
      </Container>
    </Layout>
  );
};

export default Home;
