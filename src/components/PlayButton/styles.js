import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.brandPrimary};
  border-radius: 5px;
  display: flex;
  color: white;
  font-size: 12px;
  padding: 5px 8px;
  align-items: center;
  margin-bottom: 20px;
  transition: 250ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.brandPrimaryDarken};
  }

  > div {
    margin-right: 5px;
  }
`;