const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/item.js`);
  const results = await graphql(`
    query {
      main: allMongodbTestItems(limit: 15) {
        edges {
          node {
            id
            slug
            cover
            tags
            type
          }
        }
      }
      movies: allMongodbTestItems(
        limit: 15
        filter: { type: { eq: "movie" } }
      ) {
        edges {
          node {
            slug
            cover
            title
          }
        }
      }
      series: allMongodbTestItems(
        limit: 15
        filter: { type: { eq: "serie" } }
      ) {
        edges {
          node {
            slug
            cover
            title
          }
        }
      }
      animes: allMongodbTestItems(
        limit: 15
        filter: { tags: { in: ["Anime"] } }
      ) {
        edges {
          node {
            slug
            cover
            title
          }
        }
      }
    }
  `);

  if (results.errors) {
    throw results.errors;
  }

  const pages = results.data.main.edges;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].node.cover) {
      createPage({
        path: '/' + pages[i].node.slug,
        component: template,
        context: {
          id: pages[i].node.id,
          cover: pages[i].node.cover,
          tags: pages[i].node.tags,
          type: pages[i].node.type,
        },
      });
    }
  }

  const movies = results.data.movies.edges;
  const series = results.data.series.edges;
  const animes = results.data.animes.edges;

  const PER_PAGE = 10;
  const categoryTemplate = path.resolve(`src/templates/category-type.js`);
  const tagTemplate = path.resolve(`src/templates/category-tag.js`);

  Array.from({ length: Math.ceil(movies.length / PER_PAGE) }).forEach(
    (_, i) => {
      if (movies[i].node.cover) {
        createPage({
          path: i === 0 ? `/categorias/filmes` : `/categorias/filmes/${i + 1}`,
          component: categoryTemplate,
          context: {
            limit: PER_PAGE,
            skip: i * PER_PAGE,
            numPages: Math.ceil(movies.length / PER_PAGE),
            type: 'movie',
            currentPage: i + 1,
          },
        });
      }
    }
  );

  Array.from({ length: Math.ceil(series.length / PER_PAGE) }).forEach(
    (_, i) => {
      if (series[i].node.cover) {
        createPage({
          path: i === 0 ? `/categorias/series` : `/categorias/series/${i + 1}`,
          component: categoryTemplate,
          context: {
            limit: PER_PAGE,
            skip: i * PER_PAGE,
            numPages: Math.ceil(series.length / PER_PAGE),
            type: 'serie',
            currentPage: i + 1,
          },
        });
      }
    }
  );

  Array.from({ length: Math.ceil(animes.length / PER_PAGE) }).forEach(
    (_, i) => {
      if (animes[i].node.cover) {
        createPage({
          path: i === 0 ? `/categorias/animes` : `/categorias/animes/${i + 1}`,
          component: tagTemplate,
          context: {
            limit: PER_PAGE,
            skip: i * PER_PAGE,
            numPages: Math.ceil(animes.length / PER_PAGE),
            tag: ['Anime'],
            currentPage: i + 1,
          },
        });
      }
    }
  );
};
