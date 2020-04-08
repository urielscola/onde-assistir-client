import React from 'react';
import { Link } from 'gatsby';
import { Container, Logo, Responsive, Icon } from '../index';
import { Burguer } from './partials';
import { useApplicationContext } from 'src/contexts/application';
import { MENU_ITEMS } from 'src/utils';
import * as Styles from './styles';

const Header = ({ siteTitle = '' }) => {
  const { isMenuOpen, toggleMenu } = useApplicationContext();

  return (
    <Styles.Container>
      <Container>
        <Link to="/" title={siteTitle}>
          <Logo />
        </Link>
        <Responsive.NotDesktop>
          <Styles.MobileActions>
            <Icon variant="search" size={35} />
            <Burguer isOpen={isMenuOpen} onClick={toggleMenu} />
          </Styles.MobileActions>
        </Responsive.NotDesktop>
        <Responsive.Desktop>
          <Styles.Menu>
            <ul>
              {MENU_ITEMS.map(item => (
                <li>
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
