import styled from 'styled-components';

export const Label = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeSmall};

  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizeNormal};
  }
`;

export const Value = styled.p`
  font-weight: 300;
  text-align: ${({ isTags }) => (isTags ? 'left' : 'right ')};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSizeNormal};
  }
`;
