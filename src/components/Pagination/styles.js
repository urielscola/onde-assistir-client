import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  align-items: center;
  color: ${({ theme }) => theme.fontPrimary};
  display: flex;
  padding: 1.5rem 0;
  justify-content: center;

  > div > * {
    margin: 0 10px;
  }
`;
