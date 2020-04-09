import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Footer, MobileMenu } from '../index';
import { GlobalStyles, theme } from 'src/assets/styles';
import { ApplicationProvider } from 'src/contexts/application';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <ApplicationProvider>
        <ThemeProvider theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
          <MobileMenu isOpen={true} />
        </ThemeProvider>
      </ApplicationProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
