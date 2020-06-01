import styled from 'styled-components';
import { space, layout } from 'styled-system';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  width: 50%;
  padding: 0 7px;
  ${space};
  ${layout};
  overflow: hidden;
  margin-bottom: 25px;
  font-family: ${({ theme }) => theme.fontFamilyPrimary};

  img {
    width: 100%;
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

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizeNormal};
  font-family: ${({ theme }) => theme.fontFamilyTitles};
  color: ${({ theme }) => theme.fontPrimary};
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
