import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

let interval;
const ParticlesBg = () => {
  const init = () => {
    return window.Particles.init({
      selector: '#particles',
      color: '#f1f1f1',
    });
  };

  useEffect(() => {
    const tick = () => {
      interval = setInterval(() => {
        if (window && window.Particles) {
          init();
          clearInterval(interval);
        }
      }, 300);
    };
    tick();
  }, []);

  return (
    <Container>
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" />
      </Helmet>
      <canvas id="particles" />
    </Container>
  );
};

export default ParticlesBg;
