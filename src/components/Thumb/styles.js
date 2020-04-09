import styled from 'styled-components';
import { space, layout } from 'styled-system';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  ${space};
  ${layout};
  overflow: hidden;

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

  ${medias.greaterThan('md')`
    padding: 0;
    width: 115px;
  `}
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.fontPrimary};
  padding-right: 10px;
`;
