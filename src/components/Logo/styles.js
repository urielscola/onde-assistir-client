import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fontFamilyTitles};
    font-size: ${({ theme }) => theme.fontSizeLarge};
  }

  img {
    margin-right: 7px;
    width: 55px;
  }
`;
