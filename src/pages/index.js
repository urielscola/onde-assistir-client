import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { SEO, Layout } from '../components';

const IndexPage = () => {
  const items = useStaticQuery(graphql`
    query {
      allMongodbTestItems(limit: 15) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  const data = items.allMongodbTestItems.edges;
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      {data.map(d => (
        <>
          <Link to={d.node.slug} title={d.node.title}>
            {d.node.title}
          </Link>
          <br />
        </>
      ))}
    </Layout>
  );
};

export default IndexPage;
