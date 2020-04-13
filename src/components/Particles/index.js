import React from 'react';
import ParticlesBg from 'particles-bg';
import styled from 'styled-components';

const Container = styled.div`
  canvas {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 0 !important;
  }
`;

let config = {
  num: [1, 7],
  rps: 0.2,
  radius: [5, 14],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [0.1, 0.5],
  position: 'all',
  color: ['#f1f1f1'],
  cross: 'dead',
  random: 15,
};

const Particles = () => (
  <Container>
    <ParticlesBg type="custom" config={config} bg={true} />
  </Container>
);

export default Particles;
