import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  SEO,
  Layout,
  Spacing,
  Container,
  Topic,
  Responsive,
  Thumb,
  FlexDiv,
  AboveFold,
  Categories
} from 'src/components';

const Home = () => {
  const items = useStaticQuery(graphql`
    query {
      meta: site {
        siteMetadata {
          siteUrl
        }
      }
      popular: allMongodbTestItems(
        limit: 6
        sort: { fields: popularity, order: DESC }
        filter: { popularity: { gte: 90, lte: 99 } }
      ) {
        edges {
          node {
            title
            year
            slug
            cover
            sources {
              name
            }
          }
        }
      }
      newest: allMongodbTestItems(
        limit: 6
        sort: { fields: createdAt, order: ASC }
        filter: {
          popularity: { gte: 80 }
          year: { eq: "2020" }
          createdAt: { ne: "null" }
        }
      ) {
        edges {
          node {
            title
            year
            slug
            cover
            sources {
              name
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Onde Assistir Online">
        <link rel="canonical" href={items.meta.siteMetadata.siteUrl} />
      </SEO>
      <AboveFold />
      <Spacing size="medium" />
      <Container>
        <Spacing size="medium" />
        <Topic title="POPULARES">
          <Responsive.NotDesktop>
            <FlexDiv flexWrap="wrap">
              {items.popular.edges.map(item => (
                <Thumb thumb={item} key={item.node.cover} />
              ))}
            </FlexDiv>
          </Responsive.NotDesktop>
          <Responsive.Desktop>
            <FlexDiv flexWrap="wrap" justifyContent="space-between">
              {items.popular.edges.map(item => (
                <Thumb thumb={item} key={item.node.cover} />
              ))}
            </FlexDiv>
          </Responsive.Desktop>
        </Topic>
        <Spacing size="medium" />
      </Container>
      <Categories />
      <Spacing size="small" />
      <Container>
        <Topic title="LANÇAMENTOS">
          <Responsive.NotDesktop>
            <FlexDiv flexWrap="wrap">
              {items.newest.edges.map(item => (
                <Thumb thumb={item} key={item.node.cover} />
              ))}
            </FlexDiv>
          </Responsive.NotDesktop>
          <Responsive.Desktop>
            <FlexDiv flexWrap="wrap" justifyContent="space-between">
              {items.newest.edges.map(item => (
                <Thumb thumb={item} key={item.node.cover} />
              ))}
            </FlexDiv>
          </Responsive.Desktop>
        </Topic>
      </Container>
    </Layout>
  );
};

export default Home;
