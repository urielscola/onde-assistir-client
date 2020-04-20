const realFs = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);
const path = require(`path`);
const PER_PAGE = 30;

const getRelateds = (arr, mainItem, howMany = 6) => {
  const relateds = [];
  const hashMap = {};
  while (relateds.length < howMany) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    if (!hashMap[item.node.title] && item.node.title !== mainItem) {
      relateds.push(item);
      hashMap[item.node.title] = true;
    }
  }

  return relateds;
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/item.js`);
  const results = await graphql(`
    query {
      items: allMongodbTestItems(limit: 100, filter: { cover: { ne: null } }) {
        edges {
          node {
            id
            slug
            theme
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
        relateds: getRelateds(items, items[i].node.title),
      },
    });
  }

  const movies = items.filter(i => i.node.type === 'movie');
  const series = items.filter(i => i.node.type === 'serie');

  const animes = items.filter(i => i.node.tags.includes('Anime'));
  const action = items.filter(i => i.node.tags.includes('Ação'));
  const mistery = items.filter(i => i.node.tags.includes('Mistério'));
  const drama = items.filter(i => i.node.tags.includes('Drama'));
  const romance = items.filter(i => i.node.tags.includes('Romance'));
  const sport = items.filter(i => i.node.tags.includes('Esporte'));
  const animation = items.filter(i => i.node.tags.includes('Animação'));
  const family = items.filter(i => i.node.tags.includes('Família'));
  const sciFy = items.filter(i => i.node.tags.includes('Ficção Científica'));
  const war = items.filter(i => i.node.tags.includes('Guerra'));
  const history = items.filter(i => i.node.tags.includes('História'));
  const thriller = items.filter(i => i.node.tags.includes('Thriller'));
  const militar = items.filter(i => i.node.tags.includes('Militar'));
  const adventure = items.filter(i => i.node.tags.includes('Aventura'));

  const categories = [
    { type: 'anime', items: animes, path: 'animes' },
    { type: 'action', items: action, path: 'acao' },
    { type: 'mistery', items: mistery, path: 'misterio' },
    { type: 'drama', items: drama, path: 'drama' },
    { type: 'romance', items: romance, path: 'romance' },
    { type: 'sport', items: sport, path: 'esportes' },
    { type: 'animation', items: animation, path: 'desenhos' },
    { type: 'sciFy', items: sciFy, path: 'sci-fi' },
    { type: 'family', items: family, path: 'familia' },
    { type: 'war', items: war, path: 'guerra' },
    { type: 'history', items: history, path: 'historia' },
    { type: 'thriller', items: thriller, path: 'thriller' },
    { type: 'militar', items: militar, path: 'militar' },
    { type: 'adventure', items: adventure, path: 'aventura' },
  ];

  const categoryTemplate = path.resolve(`src/templates/category.js`);

  createPage({
    path: `/categorias/filmes`,
    component: categoryTemplate,
    context: {
      items: movies,
      type: 'movie',
      perPage: PER_PAGE,
    },
  });

  createPage({
    path: `/categorias/series`,
    component: categoryTemplate,
    context: {
      items: series,
      type: 'serie',
      perPage: PER_PAGE,
    },
  });

  categories.forEach(category => {
    createPage({
      path: `/categorias/${category.path}`,
      component: categoryTemplate,
      context: {
        items: category.items,
        type: category.type,
        perPage: PER_PAGE,
      },
    });
  });
};
