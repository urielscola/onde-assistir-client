import React from 'react';
import { Link } from 'gatsby';
import { Responsive, Topic } from 'src/components';
import { MENU_ITEMS } from 'src/utils';
import { useApplicationContext } from 'src/contexts/application';
import * as Styles from './styles';

const MobileMenu = () => {
  const { isMenuOpen, toggleMenu } = useApplicationContext();
  return (
    <Responsive.NotDesktop>
      <Styles.Menu isOpen={isMenuOpen}>
        <Topic title="MENU">
          <ul>
            {MENU_ITEMS.map(item => (
              <li key={item.label} onClick={toggleMenu}>
                <Link to={item.link} title={item.label}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Topic>
      </Styles.Menu>
      <Styles.Offset
        isOpen={isMenuOpen}
        onClick={toggleMenu}
      />
    </Responsive.NotDesktop>
  );
};

export default MobileMenu;
