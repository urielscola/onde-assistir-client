import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const Container = styled.div`
  position: relative;

  .search-icon {
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    border: 1px solid ${({ theme}) => theme.gray};
    border-radius: 5px;
    height: 40px;
    font-size: 14px;
    padding: 0 12px;

    ${medias.greaterThan('md')`
      padding: 0 20px;
      height: 55px;
    `};

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
