import styled from 'styled-components';

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 75%;
  z-index: 2;
  background: ${({ theme }) => theme.offWhite};
  height: 100vh;
  text-align: left;
  padding: 3rem 2rem;
  border-right: 3px solid #666;
  position: absolute;
  top: 83px;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateX(0);
  `};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeightBold};
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.fontPrimary};
  }
`;

export const Offset = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 83px;
  height: 100vh;
  right: 0;
  transition: 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0;
  visibility: hidden;

  ${({ isOpen }) =>
    isOpen &&
    `
    opacity: 1;
    visibility: visible;
  `};
`;
