import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.offWhite}; 
    border: none;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.fontPrimary};
      opacity: 0.8; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.fontPrimary};
      opacity: 0.8; /* Firefox */
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${({ theme }) => theme.fontPrimary};
      opacity: 0.8; /* Firefox */
    }
  }
`;
