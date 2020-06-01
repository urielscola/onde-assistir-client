import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  input {
    width: 100%;
    height: 45px;
    border: 2px solid #8566aa;
    padding: 10px;
    font-size: 14px;
    box-shadow: 2px 2px 5px #a8a8a8;

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
