import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Container = styled.section`
  position: relative;
  min-height: 310px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 20px;

  ${medias.greaterThan('md')`
    height: calc(100vh - 75px);
    max-height: 600px;
    align-items: center;
  `}
`;

export const Providers = styled.img`
  position: relative;

  ${medias.greaterThan('md')`
    max-width: 500px;
  `}
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilyTitles};
  color: ${({ theme }) => theme.fontPrimary};
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 400;

  b {  
    font-weight: 700;
    color: ${({ theme }) => theme.brandPrimary};
  }

  ${medias.greaterThan('md')`
      font-size: 29px;
      font-weight: 700;
      line-height: 1.3;
  `}
`;

export const Slogan = styled.h3`
  font-family: ${({ theme }) => theme.fontFamilyTitles};
  color: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  margin-bottom: 20px;
  font-weight: 400;

  b {  
    background-color: ${({ theme }) => theme.brandPrimary};
    color: ${({ theme }) => theme.white};
    border-radius: 5px;
    padding: 2px 8px;
    font-weight: 400;
  }
`;
