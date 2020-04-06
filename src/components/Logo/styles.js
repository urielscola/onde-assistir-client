import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    display: flex;
  }
`;

export const Text = styled.div`
  padding-left: 5px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: ${({ theme }) => theme.fontFamilyTitle};
    font-size: 14px;
    font-weight: 700;

    &:first-of-type {
      color: gray;
    }

    &:last-of-type {
      color: red;
    }
  }
`;
