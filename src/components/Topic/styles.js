import styled from 'styled-components';
import { space } from 'styled-system';

export const Container = styled.div`
  ${space};

  > div {
    padding-left: 10px;
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

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: ${({ theme }) => theme.fontPrimary};
  }
`;
