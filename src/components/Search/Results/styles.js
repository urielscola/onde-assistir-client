import styled from 'styled-components';
// import { Scrollable } from 'src/components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 45px;
  z-index: 1;
  width: 100%;
  box-shadow: 0px 1px 4px #969696;
  background-color: rgb(244, 244, 244);

  ${({ isOpen }) =>
    isOpen &&
    `
    padding: 15px;

  `};

  a {
    display: flex;
  }
`;

export const ResultInfo = styled.div`
  font-size: 14px;

  span {
    padding: 15px;
    display: block;
  }
`;

export const ResultImage = styled.div`
  > div {
    width: 65px;
    margin-bottom: 0;
    padding-right: 10px;

    img {
      margin-bottom: 0;
    }
  }
`;
