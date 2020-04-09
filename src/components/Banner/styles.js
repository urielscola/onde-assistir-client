import styled from 'styled-components/macro';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  position: relative;
  min-height: 400px;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.fontPrimary};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  width: 100%;
  padding: 20px;
  height: 100%;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeightBold};

  ${medias.greaterThan('md')`
    font-size: 44px;
  `}
`;
