import styled from 'styled-components';

export const Value = styled.p`
  font-weight: 300;
  padding-left: 10px;
  text-align: ${({ isTags }) => (isTags ? 'left' : 'right ')};
  position: relative;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizeNormal};
  }
`;
