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
  `}
`;

export const Phone = styled.img`
  max-width: 300px;
  position: relative;
  right: 15px;
  z-index: 1;

  ${medias.greaterThan('md')`
    max-width: 500px;
    right: 0;
  `}
`;

export const Triangle = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilyTitles};
  color: ${({ theme }) => theme.fontPrimary};
  font-size: 30px;
  text-shadow: 1px 1px 2px #333;
  margin-bottom: 15px;

  ${medias.greaterThan('md')`
      font-size: 48px;
      font-weight: 700;
      line-height: 1.3;
  `}
`;
