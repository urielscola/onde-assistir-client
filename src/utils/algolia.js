const query = `{
  items: allMongodbTestItems {
    edges {
      node {
        title
        sources
        tags
      }
    }
  }
}`;

const mapItems = edge => {
  console.log(edge);
  return edge.node;
};
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query,
    transformer: ({ data }) => {
      console.log(data);
      return mapItems(data.items.allMongodbTestItems.edges);
    },
    indexName: `Items`,
    settings,
  },
];

module.exports = queries;
