import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Footer, MobileMenu, Search } from '../index';
import { GlobalStyles, theme } from 'src/assets/styles';
import { ApplicationProvider } from 'src/contexts/application';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
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
          <main>
            <div style={{ paddingTop: '75px' }}>{children}</div>
          </main>
          <Footer />
          <MobileMenu />
          <Search />
        </ThemeProvider>
      </ApplicationProvider>
    </>
  );
};

export default Layout;
