const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/item.js`);
  const items = await graphql(`
    query {
      allMongodbTestItems(limit: 25) {
        edges {
          node {
            id
            slug
            cover
            tags
          }
        }
      }
    }
  `);

  if (items.errors) {
    throw result.errors;
  }

  const pages = items.data.allMongodbTestItems.edges;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].node.cover) {
      createPage({
        path: '/' + pages[i].node.slug,
        component: template,
        context: {
          id: pages[i].node.id,
          cover: pages[i].node.cover,
          tags: pages[i].node.tags,
        },
      });
    }
  }
};
