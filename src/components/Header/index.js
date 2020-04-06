import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Logo, Responsive, Icon } from '../index';
import * as Styles from './styles';

const Header = ({ siteTitle }) => (
  <Styles.Container>
    <Container>
      <Link to="/" title={siteTitle}>
        <Logo />
      </Link>
      <Responsive.NotDesktop>
        <Styles.MobileActions>
          <Icon variant="search" size={30} />
          <Icon variant="menu" size={30} />
        </Styles.MobileActions>
      </Responsive.NotDesktop>
    </Container>
  </Styles.Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
