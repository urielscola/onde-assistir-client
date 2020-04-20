import styled from 'styled-components/macro';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  position: relative;
  min-height: 250px;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.fontPrimaryLighten};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
  padding: 20px;
  height: 100%;

  ${medias.greaterThan('md')`
    padding: 30px 40px;
  `}
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  color: white;
  font-family: ${({ theme }) => theme.fontFamilyPrimary};
  font-weight: ${({ theme }) => theme.fontWeightBold};

  ${medias.greaterThan('md')`
    font-size: 46px;
  `}
`;
