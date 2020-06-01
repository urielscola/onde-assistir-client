import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.offWhite};
  padding: 30px 20px 60px 20px;

  ${medias.greaterThan('md')`
    a {
      width: 32%;
    }
  `}
`;

export const Category = styled.div`
  width: 100%;
  position: relative;

  &:hover {
    &:before {
      background-color: rgba(0, 0, 0, 0.6);
    }

    h3 {
      background-color: rgba(133, 102, 170, 1);
    }
  }

  h3 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
    margin: auto;
    color: ${({ theme }) => theme.white};
    display: inline-block;
    padding: 9px;
    transition: 250ms ease-in-out;
    background-color: rgba(133, 102, 170, 0.85);
    font-size: ${({ theme }) => theme.fontSizeXLarge};
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    max-width: 180px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    transition: 250ms ease-in-out;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 99%;
  }
`;
