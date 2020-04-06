import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 25px;
  padding: 15px 0;
  background: #d6d6d6;
`;

export const Legal = styled.p`
  font-size: ${({ theme }) => theme.fontSizeXSmall};
  margin-bottom: 5px;
`;

export const Contact = styled.a`
  font-size: ${({ theme }) => theme.fontSizeXSmall};
  text-align: right;
  text-decoration: underline;
`;
