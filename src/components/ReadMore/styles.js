import styled from 'styled-components';
import { space } from 'styled-system';

export const Container = styled.div`
  font-size: ${({ theme }) => theme.fontSizeSmall};
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
