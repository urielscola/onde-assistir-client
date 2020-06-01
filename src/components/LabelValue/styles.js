import styled from 'styled-components';

export const Value = styled.p`
  font-weight: 300;
  padding-top:${({ isTags }) => (isTags ? '10px' : '0 ')};
  padding-left: 10px;
  text-align: ${({ isTags }) => (isTags ? 'left' : 'right ')};
  position: relative;
  font-size: ${({ theme }) => theme.fontSizeSmall};
  line-height: ${({ isTags }) => (isTags ? '1.5' : '1 ')};

  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizeNormal};
  }
`;
