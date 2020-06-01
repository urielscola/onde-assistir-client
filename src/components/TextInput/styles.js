import styled from 'styled-components';

export const Input = styled.input`
  margin-top: 10px;
  border: none;
  height: 42px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.offWhite};
  border: 1px solid ${({ theme }) => theme.brandPrimary};
`;