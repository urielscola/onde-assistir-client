import styled from 'styled-components';

export const Textarea = styled.textarea`
  margin-top: 10px;
  border: none;
  height: 190px;
  padding: 12px;
  resize: none;
  background-color: ${({ theme }) => theme.offWhite};
  border: 1px solid ${({ theme }) => theme.brandPrimary};
`;