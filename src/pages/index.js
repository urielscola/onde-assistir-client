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

const Home = () => {
  const items = useStaticQuery(graphql`
    query {
      movies: allMongodbTestItems(limit: 6, filter: { type: { eq: "movie" } }) {
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
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.slug} />
              ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="séries populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
            {items.movies.edges
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.slug} />
              ))}
          </FlexDiv>
          <Spacing appearence="medium" />
          <Topic title="animes populares" />
          <Spacing appearence="x-small" />
          <FlexDiv justifyContent="space-between" flexWrap="wrap">
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
