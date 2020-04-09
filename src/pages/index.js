import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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

const CATEGORIES = [
  {
    link: '/categoria/acao',
    title: 'Ação',
  },
  {
    link: '/categoria/misterio',
    title: 'Mistério',
  },
  {
    link: '/categoria/drama',
    title: 'Drama',
  },
  {
    link: '/categoria/anime',
    title: 'Anime',
  },
  {
    link: '/categoria/romance',
    title: 'Romance',
  },
  {
    link: '/categoria/esporte',
    title: 'Esporte',
  },
  {
    link: '/categoria/luta',
    title: 'Luta',
  },
  {
    link: '/categoria/desenho',
    title: 'Desenho',
  },
];

const Home = () => {
  const items = useStaticQuery(graphql`
    query {
      movies: allMongodbTestItems(limit: 9, filter: { type: { eq: "movie" } }) {
        edges {
          node {
            title
            slug
            cover
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
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
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ],
              }}
            >
              {CATEGORIES.map(category => (
                <Category
                  key={category.title}
                  title={category.title}
                  slug={category.slug}
                />
              ))}
            </Slider>
            <Spacing appearence="small" />
          </Responsive.NotDesktop>
          <Responsive.Desktop>
            <FlexDiv flexWrap="wrap" justifyContent="space-between">
              {CATEGORIES.map(category => (
                <Category
                  key={category.title}
                  title={category.title}
                  slug={category.slug}
                />
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
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.cover} />
              ))}
          </Slider>
          <Spacing appearence="x-large" />
          <Topic title="series populares" />
          <Spacing appearence="x-small" />
          <Slider>
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.cover} />
              ))}
          </Slider>
          <Spacing appearence="x-large" />
          <Topic title="animes populares" />
          <Spacing appearence="x-small" />
          <Slider>
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.cover} />
              ))}
          </Slider>
          <Spacing appearence="x-large" />
        </Responsive.NotDesktop>
        <Responsive.Desktop>
          <Topic title="filmes populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between">
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.slug} />
              ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="séries populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between">
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.slug} />
              ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="animes populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between">
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.slug} />
              ))}
          </FlexDiv>
          <Spacing appearence="large" />
        </Responsive.Desktop>
      </Container>
    </Layout>
  );
};

export default Home;
