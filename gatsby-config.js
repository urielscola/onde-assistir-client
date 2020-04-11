require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    title: `Onde assistir online`,
    description: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Baloo 2'],
        },
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: process.env.CONNECTION_STRING,
        auth: { user: process.env.DB_USER, password: process.env.DB_PASS },
        dbName: process.env.DB_NAME,
        collection: [`items`, `tags`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
  ],
};
