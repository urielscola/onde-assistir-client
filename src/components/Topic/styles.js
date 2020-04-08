import styled from 'styled-components';
import { space, typography } from 'styled-system';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  ${space};

  > div {
    padding-left: 10px;

    ${medias.greaterThan('md')`
      padding-left: 17px;
    `}
  }
`;

export const Topic = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeNormal};
  text-transform: uppercase;
  position: relative;
  padding-left: 10px;
  margin-bottom: 10px;
  ${space};
  ${typography};

  ${medias.greaterThan('md')`
    font-size: ${({ theme }) => theme.fontSizeLarge};
    padding-left: 17px;
  `}

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: ${({ color, theme }) =>
      color || theme.fontPrimaryLighten};
  }
`;
