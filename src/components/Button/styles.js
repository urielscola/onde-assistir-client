import styled, { css } from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.brandPrimary};
  color: ${({ theme }) => theme.white};
  text-align: center;
  border: none;
  height: 50px;  
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: 0 20px;
  min-width: 170px;

  &:hover {
    background-color: ${({ theme }) => theme.brandPrimaryDarken};
  }
`;