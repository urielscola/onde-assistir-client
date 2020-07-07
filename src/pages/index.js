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
        sort: { fields: popularity, order: ASC }
        filter: { popularity: { gte: 90, lte: 99 } }
      ) {
        edges {
          node {
            title
            slug
            cover
            tags
          }
        }
      }
      newest: allMongodbTestItems(
        limit: 6
        sort: { fields: createdAt, order: ASC }
        filter: {
          popularity: { gte: 80 }
          year: { eq: 2020 }
          createdAt: { ne: "null" }
        }
      ) {
        edges {
          node {
            title
            slug
            cover
            tags
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
      <Container>
        <Responsive.NotDesktop>
          <Categories />
          <Spacing appearence="small" />
          <Topic title="Populares">
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
          <Spacing appearence="small" />
          <Topic title="Lançamentos">
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
        </Responsive.NotDesktop>
        <Responsive.Desktop>
          <Spacing appearence="small" />
          <Topic title="Populares">
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
          <Spacing appearence="x-large" />
          <Spacing appearence="small" />
          <Categories />
          <Spacing appearence="x-large" />
          <Spacing appearence="medium" />
          <Topic title="Lançamentos">
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
        </Responsive.Desktop>
      </Container>
    </Layout>
  );
};

export default Home;
