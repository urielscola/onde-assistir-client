import styled from 'styled-components';
import { Image as GatsbyImage } from 'src/components';
import { space, typography } from 'styled-system';

export const Column = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  ${space};

  .gatsby-image-wrapper {
    box-shadow: ${({ theme }) => theme.boxShadow} !important;
  }
`;

export const Bar = styled.div`
  background-color: ${({ bg }) => bg || '#ccc'};
  height: 33vh;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }
`;

// export const Title = styled.h1`
//   font-weight: 700;
//   font-size: ${({ theme }) => theme.fontSizeXLarge};
//   font-family: ${({ theme }) => theme.fontFamilyTitle};
//   span {
//     font-size: ${({ theme }) => theme.fontSizeNormal};
//     font-weight: 400;
//   }

//   @media (min-width: 767px) {
//     font-size: 28px;
//     margin-bottom: 5px;
//     span {
//       font-size: ${({ theme }) => theme.fontSizeXLarge};
//     }
//   }
// `;

export const Year = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSizeMedium};
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
  font-weight: 700;
  text-shadow: 0px 1px 2px #333;
  padding-right: 20px;
  font-size: ${({ theme }) => theme.fontSizeXLarge};
  margin-bottom: 10px;
  line-height: 1.25;
  ${space};
  ${typography};
`;

export const Ratings = styled.div`
  color: ${({ theme }) => theme.white};
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
