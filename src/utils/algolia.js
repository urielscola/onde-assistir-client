const query = `{
  items: allMongodbTestItems {
    edges {
      node {
        title
        slug
        sources
      }
    }
  }
}`;

const mapItems = edge => edge.node;
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query,
    transformer: ({ data }) => {
      return mapItems(data.items.allMongodbTestItems.edges);
    },
    indexName: `Items`,
    settings,
  },
];

module.exports = queries;
