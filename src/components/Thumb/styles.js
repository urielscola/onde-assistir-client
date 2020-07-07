import styled from 'styled-components';
import { space, layout } from 'styled-system';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  width: 50%;
  padding: 0 7px;
  ${space};
  ${layout};
  overflow: hidden;
  position: relative;
  margin-bottom: 25px;
  font-family: ${({ theme }) => theme.fontFamilyPrimary};

  &:hover {
    div {
      opacity: 1;
      visibility: visible;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 7px;
    transition: 250ms ease;
    opacity: 0.9;
    box-shadow: ${({ theme }) => theme.boxShadow};

    &:hover {
      opacity: 1;
    }
  }

  ${medias.greaterThan('sm')`
    width: 33%;
    `}

  ${medias.greaterThan('md')`
    padding: 0;
    width: 170px;
  `}
`;

export const Infos = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: 250ms ease-in-out;
`;

export const Tags = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  text-align: center;
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizeNormal};
  font-family: ${({ theme }) => theme.fontFamilyTitles};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  text-align: center;
  margin-bottom: 17px;
`;

export const Year = styled.h5`
  font-size: ${({ theme }) => theme.fontSizeSmall};
  color: ${({ theme }) => theme.fontPrimaryLighten};
`;

export const Sources = styled.h6`
  font-size: ${({ theme }) => theme.fontSizeSmall};
  margin-bottom: 5px;
  color: ${({ theme }) => theme.fontPrimaryLighten};
`;
