require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const realFs = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);
const path = require(`path`);
const axios = require('axios');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/item.js`);

  let maxPages = 1;

  for (let i = 1; i <= /* maxPages */ 7; i++) {
    console.log({ i, maxPages });

    try {
      const { data } = await axios({
        method: 'GET',
        url: `${process.env.GATSBY_API_URL}/item/deploy`,
        headers: {
          page: i,
          per_page: 10000,
          'x-key': process.env.DEPLOY_KEY
        }
      });

      if (i === 1) maxPages = data.pages;

      for (let j = 0; j < data.list.length; j++) {
        createPage({
          path: '/' + data.list[j].slug,
          component: template,
          context: {
            item: data.list[j],
          },
        });
      }
      
    } catch (err) {
      console.log(err);
    }
  }   
};