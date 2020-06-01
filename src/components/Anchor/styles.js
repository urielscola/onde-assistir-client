import styled, { css } from 'styled-components';

export const Container = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  transition: 250ms ease-in-out;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.brandSecundary};
  border: none;
  opacity: 0;
  visibility: hidden;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    visibility: visible;
  `};

  &:hover {
    background-color: ${({ theme }) => theme.brandSecundaryDarken};
  }
`;