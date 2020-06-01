import styled from 'styled-components';
import { space, typography } from 'styled-system';
import { medias } from 'src/assets/styles';
import { Bar } from 'src/components';

export const Column = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  ${space};

  .gatsby-image-wrapper {
    box-shadow: ${({ theme }) => theme.boxShadow} !important;
  }
`;

export const CustomBar = styled(Bar)`
  min-height: 33vh;
  ${medias.greaterThan('md')`
    min-height: 205px;
  `}
`;

export const Year = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSizeNormal};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  color: ${({ theme }) => theme.white};
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 5px;
  text-shadow: 0px 1px 2px #333;
  ${space};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.fontFamilyTitles};
  font-weight: 700;
  text-shadow: 0px 1px 2px #333;
  padding-right: 20px;
  font-size: 22px;
  margin-bottom: 20px;
  line-height: 1.25;
  ${space};
  ${typography};

  ${medias.greaterThan('md')`
    font-size: 28px;
    margin-bottom: 5px;
  `}
`;

export const Ratings = styled.div`
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 15px;

  img {
    margin-right: 5px;
    width: 20px;
  }

  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizeNormal};
  }
`;

export const Subtopic = styled.h3`
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fontFamilyTitle};
  ${space};

  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizeLarge};
    margin-bottom: 10px;
  }
`;


