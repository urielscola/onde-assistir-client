import styled from 'styled-components/macro';

export const Scrollable = styled.div`
  max-height: ${({ maxHeight }) => maxHeight || 'initial'};
  height: auto;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.fontPrimary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.offWhite};
  }
`;
