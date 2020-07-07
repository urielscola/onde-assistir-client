require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Onde Assistir Online`,
      short_name: `Onde Assistir Online`,
      start_url: `/`,
      background_color: `#f4f4f4`,
      theme_color: `#3A8483`,
      display: `minimal-ui`,
      icon: `src/assets/images/icon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/src/pages`,
      ignore: [`**/styles.js`, `**/partials/**.js`],
    },
  },
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `#8ec6c5`,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Montserrat'],
      },
    },
  },
  {
    resolve: `gatsby-source-mongodb`,
    options: {
      connectionString: process.env.CONNECTION_STRING,
      auth: { user: process.env.DB_USER, password: process.env.DB_PASS },
      dbName: process.env.DB_NAME,
      collection: [`items`],
    },
  },
  `gatsby-plugin-styled-components`,
  'gatsby-plugin-sitemap',
  'gatsby-plugin-root-import',
];

if (process.env.CONTEXT === 'development') {
  plugins.push('gatsby-plugin-webpack-bundle-analyzer');
}

if (process.env.CONTEXT === 'production') {
  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
    },
  };

  plugins.push(analytics);
}

// plugins.push(`gatsby-plugin-offline`);

module.exports = {
  siteMetadata: {
    title: `Onde Assistir Online`,
    description: `9 serviços de stream, uma só pesquisa. Encontre o que você deseja assistir.`,
    siteUrl: 'https://ondeassistironline.com.br',
  },
  plugins,
};
