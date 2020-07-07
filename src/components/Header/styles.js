import styled from 'styled-components';

export const Container = styled.header`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.white};
  height: 75px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  box-shadow: 0px 1px 4px ${({ theme }) => theme.gray};

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
    margin-left: 10px;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: 35px;
      a {
        font-size: ${({ theme }) => theme.fontSizeMedium};
      }
    }
  }
`;
