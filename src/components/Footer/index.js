import React from 'react';
import { Container, Logo, FlexDiv } from '../index';
import * as Styles from './styles';

const Footer = () => (
  <Styles.Container>
    <Container>
      <FlexDiv justifyContent="space-between" alignItems="center">
        <Logo />
        <FlexDiv flexDirection="column">
          <Styles.Legal>Onde assistir Online © 2020</Styles.Legal>
          <Styles.Contact href="mailto:ondeassistironline@gmail.com">
            Entre em contato
          </Styles.Contact>
        </FlexDiv>
      </FlexDiv>
    </Container>
  </Styles.Container>
);

export default Footer;
