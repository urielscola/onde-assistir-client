import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Footer } from '../index';
import { GlobalStyles, theme } from 'src/assets/styles';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles theme={theme} />
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
