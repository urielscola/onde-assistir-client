import styled from 'styled-components';
import { space } from 'styled-system';

export const Column = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
`;

export const SmallContainer = styled.div`
  max-width: 790px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeXLarge};
  font-family: ${({ theme }) => theme.fontFamilyTitle};
  span {
    font-size: ${({ theme }) => theme.fontSizeNormal};
    font-weight: 400;
  }

  @media (min-width: 767px) {
    font-size: 28px;
    margin-bottom: 5px;
    span {
      font-size: ${({ theme }) => theme.fontSizeXLarge};
    }
  }
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: 767px) {
    padding: 20px;
  }
`;

export const Ratings = styled.div`
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
  align-items: center;
  > div {
    margin-right: 7px;
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

export const Badge = styled.div`
  margin-right: 10px;
  img {
    border-radius: 5px;
  }

  @media (min-width: 767px) {
    margin-right: 15px;
  }
`;
