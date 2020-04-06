import styled from 'styled-components';

export const Container = styled.header`
  padding: 15px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.white};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MobileActions = styled.div`
  display: flex;
  justify-content: center;

  > div {
    margin-left: 15px;
  }
`;
