import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const TopContainer = styled.footer`
  margin-top: 55px;
  padding: 25px 0;
  color: ${({ theme }) => theme.fontPrimary};
  background: ${({ theme }) => theme.offWhite};

  img {
    display: none;
  }

  a {
    color: ${({ theme }) => theme.fontPrimary};
  }
  hr {
    background-color: ${({ theme }) => theme.fontPrimary};
    height: 1px;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 25px;
  }
`;

export const FooterNav = styled.div`
  width: 40%;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  font-family: ${({ theme }) => theme.fontFamilyPrimary};

  h5 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  ul {
    li {
      font-weight: 300;
      padding: 7px 0;
    }
  }

  ${medias.greaterThan('md')`
    width: 200px;
  `}
`;

export const BottomContainer = styled.footer`
  padding: 12px 0;
  font-size: ${({ theme }) => theme.fontSizeXSmall};
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.fontPrimary};

  a {
    color: ${({ theme }) => theme.white};
  }
`;
