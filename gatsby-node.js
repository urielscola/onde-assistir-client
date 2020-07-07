const realFs = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/item.js`);
  const results = await graphql(`
    query {
      items: allMongodbTestItems(limit:100000) {
        edges {
          node {
            id
            slug
            title
            tags
            type
            cast
            year
            runtime
            description
            cover
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
              count
            }
          }
        }
      }
    }
  `);

  if (results.errors) {
    throw results.errors;
  }

  const items = results.data.items.edges;
  for (let i = 0; i < items.length; i++) {
    createPage({
      path: '/' + items[i].node.slug,
      component: template,
      context: {
        item: items[i].node,
      },
    });
  }
};
