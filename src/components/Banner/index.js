import React from 'react';
import { Container, Particles } from '../index';
import * as Styles from './styles';

const Banner = () => {
  return (
    <Styles.Container>
      <Particles />
      <Container>
        <Styles.Background>
          <Styles.Title>
            7 serviços de stream, <br />
            Uma só pesquisa.
          </Styles.Title>
        </Styles.Background>
      </Container>
    </Styles.Container>
  );
};

export default Banner;
