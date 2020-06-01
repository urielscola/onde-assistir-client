import styled from 'styled-components';
import { space } from 'styled-system';

export const Container = styled.div`
  position: fixed;
  left: 0;
  padding: 15px 0;
  z-index: 4;
  top: 75px;
  width: 100%;
  background-color: white;

  display: none;
  ${({ isOpen }) =>
    isOpen &&
    `
    display: block;
  `};
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSizeXLarge};
  text-transform: uppercase;
  margin-bottom: 7px;
  ${space};
`;
