import styled from 'styled-components';

export const Container = styled.header`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.white};
  min-height: 83px;
  display: flex;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const MobileActions = styled.div`
  display: flex;
  justify-content: center;

  > div,
  button {
    margin-left: 20px;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: 35px;
      a {
        font-weight: ${({ theme }) => theme.fontWeightBold};
      }
    }
  }
`;
