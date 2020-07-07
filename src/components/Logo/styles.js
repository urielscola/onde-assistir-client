import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fontFamilyTitles};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;

    > * {
      display: inline-block;
    }

    > div {
      background-color: ${({ theme }) => theme.brandPrimary};
      border-radius: 50%;

      svg {
        position: relative;
        bottom: 1px;
        left: 1px;
      }
    };

    @media(min-width: 370px) {
      font-size: 14px;
    }

    ${medias.greaterThan('md')`
      font-size: ${({ theme }) => theme.fontSizeMedium};
    `}

    span {
      background-color: ${({ theme }) => theme.brandPrimary};
      color: ${({ theme }) => theme.white};
      border-radius: 5px;
      padding: 3px 8px;
    }
  }
`;
