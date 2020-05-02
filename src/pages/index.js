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
      slug: 'serie/la-casa-de-papel',
      cover: '5e917202e776b82bd0a1e3a8.png',
    },
  },
  {
    node: {
      title: 'The Walking Dead',
      slug: 'serie/the-walking-dead',
      cover: '5e917201e776b82bd0a1e3a5.png',
    },
  },
  {
    node: {
      title: 'Peppa Pig',
      slug: 'serie/peppa-pig',
      cover: '5e91722be776b82bd0a1e423.png',
    },
  },
  {
    node: {
      title: 'The Witcher',
      slug: 'serie/the-witcher',
      cover: '5e917222e776b82bd0a1e408.png',
    },
  },
  {
    node: {
      title: 'Como Defender um Assassino',
      slug: 'serie/como-defender-um-assassino',
      cover: '5e917210e776b82bd0a1e3d1.png',
    },
  },
  {
    node: {
      title: 'Orange is the New Black',
      slug: 'serie/orange-is-the-new-black',
      cover: '5e917260e776b82bd0a1e4bf.png',
    },
  },
];

const MOVIES = [
  {
    node: {
      title: 'Eu sou a lenda',
      slug: 'filme/eu-sou-a-lenda',
      cover: '5e874cc4d0467c5158d2d5f9.png',
    },
  },
  {
    node: {
      title: 'Procurando Dory',
      slug: 'filme/procurando-dory',
      cover: '5e874d48d0467c5158d2d756.png',
    },
  },
  {
    node: {
      title: 'Bird Box',
      slug: 'filme/bird-box',
      cover: '5e874d2ed0467c5158d2d711.png',
    },
  },
  {
    node: {
      title: 'Noé',
      slug: 'filme/noe',
      cover: '5e874d7bd0467c5158d2d7e1.png',
    },
  },
  {
    node: {
      title: 'O Durão',
      slug: 'filme/o-durao',
      cover: '5e874ccfd0467c5158d2d616.png',
    },
  },
  {
    node: {
      title: 'O Melhor de Mim',
      slug: 'filme/o-melhor-de-mim',
      cover: '5e874d71d0467c5158d2d7c7.png',
    },
  },
];

const ANIMES = [
  {
    node: {
      title: 'Naruto Shippuuden',
      slug: 'serie/naruto-shippuuden',
      cover: '5e9171bffe10ba1c0ca6f5f4.png',
    },
  },
  {
    node: {
      title: 'Demon Slayer: Kimetsu no Yaiba',
      slug: 'serie/demon-slayer-kimetsu-no-yaiba',
      cover: '5e9171c0fe10ba1c0ca6f5f8.png',
    },
  },
  {
    node: {
      title: 'One-Punch Man',
      slug: 'serie/one-punch-man',
      cover: '5e9171c3fe10ba1c0ca6f600.png',
    },
  },
  {
    node: {
      title: 'Fullmetal Alchemist: Brotherhood',
      slug: 'serie/fullmetal-alchemist-brotherhood',
      cover: '5e9171c4fe10ba1c0ca6f603.png',
    },
  },
  {
    node: {
      title: 'HAIKYU!!',
      slug: 'serie/haikyu',
      cover: '5e9171d5fe10ba1c0ca6f638.png',
    },
  },
  {
    node: {
      title: 'DEATH NOTE',
      slug: 'serie/death-note',
      cover: '5e917258e776b82bd0a1e4a9.png',
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
              <Thumb thumb={item} key={item.node.cover} />
            ))}{' '}
          </Slider>
          <Spacing appearence="x-large" />
          <Topic title="series populares" />
          <Spacing appearence="x-small" />
          <Slider>
            {SERIES.map(item => (
              <Thumb thumb={item} key={item.node.cover} />
            ))}
          </Slider>
          <Spacing appearence="x-large" />
          <Topic title="animes populares" />
          <Spacing appearence="x-small" />
          <Slider>
            {ANIMES.map(item => (
              <Thumb thumb={item} key={item.node.cover} />
            ))}
          </Slider>
          <Spacing appearence="x-large" />
        </Responsive.NotDesktop>
        <Responsive.Desktop>
          <Topic title="filmes populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {MOVIES.map(item => (
              <Thumb thumb={item} key={item.node.cover} />
            ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="séries populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {SERIES.map(item => (
              <Thumb thumb={item} key={item.node.cover} />
            ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="animes populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {ANIMES.map(item => (
              <Thumb thumb={item} key={item.node.cover} />
            ))}
          </FlexDiv>
          <Spacing appearence="large" />
        </Responsive.Desktop>
      </Container>
    </Layout>
  );
};

export default Home;
