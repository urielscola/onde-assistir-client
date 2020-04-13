import styled from 'styled-components/macro';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  position: relative;
  width: 50%;
  padding: 10px;

  a {
    position: relative;
    z-index: 1;
  }

  ${medias.greaterThan('md')`
    box-shadow: ${({ theme }) => theme.boxShadow};

    padding: 0;
    margin-bottom: 10px;
    width: 135px;
  `}
`;

export const Background = styled.div`
  position: relative;
  z-index: 0;
  background-color: ${({ color, theme }) => color || theme.fontPrimaryLighten};
  height: 80px;

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    transition: 150ms ease-in-out;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    opacity: 0.8;
  }
`;

export const Title = styled.h5`
  position: absolute;
  text-transform: uppercase;
  right: 0;
  text-align: center;
  bottom: 0;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  padding: 7px;
  color: white;
  letter-spacing: 1px;
`;
