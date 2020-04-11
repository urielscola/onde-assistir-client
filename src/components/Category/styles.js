import styled from 'styled-components/macro';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${medias.greaterThan('md')`
    margin-bottom: 2%;
    padding: 0;
    width: 23%;
  `}
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.fontPrimaryLighten};
  height: 170px;
`;

export const Title = styled.h5`
  position: absolute;
  text-transform: uppercase;
  right: 5px;
  min-width: 125px;
  text-align: center;
  bottom: 5px;
  font-weight: ${({ theme }) => theme.fontWeightBold};
  padding: 20px;
  background-color: white;
`;
