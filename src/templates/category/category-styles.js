import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Banner = styled.div`
  height: 120px;
  position: relative;
  background-color: ${({ theme }) => theme.fontPrimaryLighten};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${medias.greaterThan('sm')`
    height: 150px;
  `};

  h3 {
    text-transform: uppercase;
    font-size: 30px;
    text-shadow: 0px 1px 2px #333;
    letter-spacing: 1px;
    color: white;
    font-family: ${({ theme }) => theme.fontFamilyPrimary};
    font-weight: ${({ theme }) => theme.fontWeightBold};

    ${medias.greaterThan('sm')`
      font-size: 50px;
    `};
  }
`;

export const Container = styled.div`
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
