import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  SEO,
  Container,
  Layout,
  Topic,
  Thumb,
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

          <FlexDiv flexWrap="wrap" justifyContent="space-between">
            {CATEGORIES.map(category => (
              <Category
                key={category.title}
                title={category.title}
                slug={category.slug}
              />
            ))}
          </FlexDiv>
        </Container>
      </div>
      <Spacing appearence="large" />

      <Container>
        <Topic title="filmes populares" />
        <Spacing appearence="x-small" />
        <FlexDiv justifyContent="space-between">
          {items.movies.edges
            .filter(item => !!item.node.cover)
            .map(item => (
              <Thumb thumb={item} key={item.slug} />
            ))}
        </FlexDiv>
        <Spacing appearence="small" />

        <Topic title="filmes populares" />
        <Spacing appearence="x-small" />
        <FlexDiv justifyContent="space-between">
          {items.movies.edges
            .filter(item => !!item.node.cover)
            .map(item => (
              <Thumb thumb={item} key={item.slug} />
            ))}
        </FlexDiv>
        <Spacing appearence="small" />

        <Topic title="filmes populares" />
        <Spacing appearence="x-small" />
        <FlexDiv justifyContent="space-between">
          {items.movies.edges
            .filter(item => !!item.node.cover)
            .map(item => (
              <Thumb thumb={item} key={item.slug} />
            ))}
        </FlexDiv>
        <Spacing appearence="x-large" />
      </Container>
      {/* {data.map(d => (
        <>
          <Link to={d.node.slug} title={d.node.title}>
            {d.node.title}
          </Link>
          <br />
        </>
      ))} */}
    </Layout>
  );
};

export default Home;
