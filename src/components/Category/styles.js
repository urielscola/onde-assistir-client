import styled from 'styled-components/macro';
import { flexbox, space, layout, position } from 'styled-system';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  position: relative;
  width: 23%;
  margin-bottom: 2%;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
