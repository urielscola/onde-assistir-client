import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Container = styled.section`
  ${medias.greaterThan('md')`
    a {
      width: 32%;
    }
  `}
`;

export const Category = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  text-transform: uppercase;

  ${medias.greaterThan('md')`
    margin-bottom: 0;
  `}

  > div {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    max-width: 100px;
  };
`;
