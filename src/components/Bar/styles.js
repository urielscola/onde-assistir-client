import styled from 'styled-components/macro';
import { space } from 'styled-system';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  background-color: #0F5959;
  /* border-bottom: 7px solid #8EC6C5; */
  min-height: 80px;
  position: relative;
  margin-bottom: 7vh;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    z-index: -1;
    height: 100%;
  }

  ${medias.greaterThan('md')`
    min-height: 180px;
    margin-bottom: 0;
  `}

  h3 {
    font-size: 30px;
    color: white;
    font-family: ${({ theme }) => theme.fontFamilyTitles};
    font-weight: ${({ theme }) => theme.fontWeightBold};

    ${medias.greaterThan('sm')`
      font-size: 34px;
    `}
  }

  ${space};
`;

