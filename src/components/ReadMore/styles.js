import styled from 'styled-components';
import { space } from 'styled-system';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  font-size: ${({ theme }) => theme.fontSizeSmall};

  ${medias.greaterThan('md')`
    font-size: ${({ theme }) => theme.fontSizeNormal};
  `}

  ${space};

  .displayed-text {
    line-height: 1.5;
  }
  .read-more-button {
    text-align: right;
    position: relative;
    bottom: 10px;
    text-decoration: underline;
  }
`;
