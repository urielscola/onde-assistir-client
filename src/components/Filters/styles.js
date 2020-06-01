import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const FilterBar = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  top: 260px;
  width: 70%;
  background-color: ${({ theme }) => theme.offWhite};
  z-index: 2;
  transform: translateX(-100%);
  padding: 20px 20px;
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateX(0);
  `}
`;

export const FilterBarOffset = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  top: 260px;
  width: 100%;
  z-index: 1;
  transition: 0.6s ease-in-out;
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

export const FilterContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.offWhite};
  color: ${({ theme }) => theme.fontPrimary};
  width: 100%;

  
  ${medias.greaterThan('md')`
    height: 100px;
  `}
`;

export const FilterTitle = styled.p`
  margin-bottom: 15px;
`;

export const BadgeContainer = styled.div`
  img {
    opacity: 0.5;
    cursor: pointer;
    transition: 250ms ease-in-out;
    ${({ active }) =>
    active &&
    `
    opacity: 1;

  `};
  }
`;

export const ListContainer = styled.ul`
  columns: 2;
  margin-bottom: 25px;
  padding-right: 5px;
`;

export const ListItem = styled.li`
  padding-left: 17px;
  margin-bottom: 10px;
  font-size: 14px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10;
    transform: translateY(50%);
    width: 10px;
    height: 10px;
    background: #ddd;
  }

  ${({ active }) =>
    active &&
    `
    &:before {
      background: #333;
    }
  `};
`;
