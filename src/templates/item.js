import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'src/components';
import ItemMobile from './item/item-mobile';
import ItemDesktop from './item/item-desktop';

const ALLOWED_SOURCES = [
  'Amazon Prime Video',
  'Netflix',
  'Claro Video',
  'Crunchyroll',
  'Globoplay',
  'Fox Play',
  'Fox Premium',
];

const Item = ({ data }) => {
  const payload = data.item.edges[0].node;

  console.log(data);
  const ratingImages = {
    'Rotten Tomatoes': data.rotten,
    IMDB: data.imdb,
  };

  const sourcesImages = {
    'Amazon Prime Video': data.amazonprime,
    Netflix: data.netflix,
    'Claro Video': data.clarovideo,
    Crunchyroll: data.crunchyroll,
    Globoplay: data.crunchyroll,
    'Fox Play': data.foxplay,
    'Fox Premium': data.foxpremium,
  };

  return (
    <Layout>
      <SEO title={payload.title} />
      <ItemMobile
        data={data}
        payload={payload}
        allowedSources={ALLOWED_SOURCES}
        ratingImages={ratingImages}
        related={data.related}
        sourcesImages={sourcesImages}
      />
      <ItemDesktop
        data={data}
        payload={payload}
        allowedSources={ALLOWED_SOURCES}
        ratingImages={ratingImages}
        related={data.related}
        sourcesImages={sourcesImages}
      />
    </Layout>
  );
};

export default Item;

export const query = graphql`
  query($id: String!, $cover: String, $tags: [String], $type: String) {
    item: allMongodbTestItems(filter: { id: { eq: $id } }) {
      edges {
        node {
          slug
          id
          tags
          theme
          title
          type
          year
          runtime
          seasons
          sources {
            name
            url
            value
          }
          ratings {
            name
            url
            value
          }
          description
          cover
        }
      }
    }
    cover: file(relativePath: { eq: $cover }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imdb: file(relativePath: { eq: "imdb.png" }) {
      childImageSharp {
        fixed(width: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rotten: file(relativePath: { eq: "rotten.png" }) {
      childImageSharp {
        fixed(width: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    netflix: file(relativePath: { eq: "netflix.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    amazonprime: file(relativePath: { eq: "primevideo.jpg" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    clarovideo: file(relativePath: { eq: "clarovideo.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    crunchyroll: file(relativePath: { eq: "crunchyroll.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foxplay: file(relativePath: { eq: "foxplay.jpg" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    foxpremium: file(relativePath: { eq: "foxpremium.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    related: allMongodbTestItems(
      limit: 9
      filter: { tags: { in: $tags }, id: { ne: $id }, type: { eq: $type } }
    ) {
      edges {
        node {
          slug
          title
          cover
        }
      }
    }
  }
`;
