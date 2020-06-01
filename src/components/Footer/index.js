import React from 'react';
import { Link } from 'gatsby';
import { Container, Logo, FlexDiv } from '../index';
import * as Styles from './styles';

const Footer = () => (
  <footer>
    <Styles.TopContainer>
      <Container>
        <Logo />

        <hr />
        <FlexDiv>
          <Styles.FooterNav>
            <h5>Categorias</h5>
            <ul>
              <li><Link to="/catalogo">Populares</Link></li>
              <li><Link to="/catalogo">Lançamentos</Link></li>
            </ul>
          </Styles.FooterNav>
          <Styles.FooterNav>
            <h5>Suporte</h5>
            <ul>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/termos-de-uso">Termos de uso</Link></li>
            </ul>
          </Styles.FooterNav>
        </FlexDiv>
      </Container>
    </Styles.TopContainer>
    <Styles.BottomContainer>
      <Container>
        <FlexDiv justifyContent="space-between">
          <span>© 2020</span>
          <span><Link to="/politica-de-privacidade">Política de Privacidade</Link></span>
        </FlexDiv>
      </Container>
    </Styles.BottomContainer>
  </footer>
);

export default Footer;
