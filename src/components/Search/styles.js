import styled from 'styled-components';
import { space } from 'styled-system';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  /* padding: 20px 0; */
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    opacity: 1;
    visibility: visible;
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

export const SearchCredits = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  float: right;
  margin-top: 25px;
`;
