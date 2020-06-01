import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  min-height: 350px;
  .infinite-scroll-component > div > div {
    margin-bottom: 30px;
    width: 50%;
  }

  .infinite-scroll-component {
    width: 100%; !important;
  }

  ${medias.greaterThan('sm')`
    .infinite-scroll-component > div > div {
      width: 25%;
      margin-right: 20px;

      h4 {
        font-size: 14px;
      }
    }
  `}

  ${medias.greaterThan('md')`
    .infinite-scroll-component > div > div {
      width: 170px;
      margin-right: 18px;
    }
  `}
`;
