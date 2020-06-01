import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  position: relative;
  margin-right: 20px;
`;

export const Button = styled.button`
  height: 45px;
  background-color: #C4C4C4;
  color: ${({ theme }) => theme.white};
  padding: 0 30px;
  min-width: 120px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  p {
    margin-right: 5px;
  }

  ${({ isOpen, theme }) =>
    isOpen &&
    `
    background-color: ${theme.brandSecundary};

  `}

  ${({ isActive, theme }) =>
    isActive &&
    `
    background-color: ${theme.brandSecundary} !important;

  `}
`;

export const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 250px;
  left: 0;
  min-width: 250px;
  border: 1px solid #CDCDCD;
  background-color:${({ theme }) => theme.offWhite};
  padding: 15px;
  z-index: 1;

  display: none;

  ${({ isOpen }) =>
    isOpen &&
    `
    display: block;

  `}

  ul {
    columns: 2;
  }
`;