import React from 'react';
import { Link } from 'gatsby';
import { Container, Logo, Responsive, Icon } from '../index';
import { Burguer, Search } from './partials';
import { useApplicationContext } from 'src/contexts/application';
import Results from '../Search/Results';
import { MENU_ITEMS } from 'src/utils';
import * as Styles from './styles';
import { theme } from 'src/assets/styles';

const Header = ({ siteTitle = '' }) => {
  const { isMenuOpen, toggleMenu, isSearchOpen, toggleSearch } = useApplicationContext();

  return (
    <Styles.Container>
      <Container>
        <Link to="/" title={siteTitle}>
          <Logo />
        </Link>
        <Responsive.Desktop>
          {window.location.pathname !== '/' &&  <Search ResultComponent={Results} />}
        </Responsive.Desktop>
        <Responsive.NotDesktop>
          <Styles.MobileActions>
            <Icon
              variant={isSearchOpen ? 'close' : 'search'}
              size={30}
              color={theme.fontPrimary}
              onClick={toggleSearch}
            />
            <Burguer isOpen={isMenuOpen} onClick={toggleMenu} />
          </Styles.MobileActions>
        </Responsive.NotDesktop>
        <Responsive.Desktop>
          <Styles.Menu>
            <ul>
              {MENU_ITEMS.map(item => (
                <li key={item.label}>
                  <Link to={item.link} title={item.label}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Styles.Menu>
        </Responsive.Desktop>
      </Container>
    </Styles.Container>
  );
};

export default Header;
