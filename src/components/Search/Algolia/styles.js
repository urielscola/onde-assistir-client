import styled from 'styled-components';
import { medias } from 'src/assets/styles';

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: 0;
  }

  .ais-SearchBox {
    margin-bottom: 10px;

    > form {
      border: 2px solid white;
    }
  }

  .ais-Stats {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.white};
  }

  #card & {
    .ais-Hits-list {
      margin-top: 2rem;
    }
    .ais-Hits-item {
    }
  }

  .ais-SearchBox-input {
    background: none;
    color: ${({ theme }) => theme.white};
    border: none;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizeNormal};
    padding: 0.5rem;
    width: 100%;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.offWhite};
      opacity: 0.8; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.offWhite};
      opacity: 0.8; /* Firefox */
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${({ theme }) => theme.offWhite};
      opacity: 0.8; /* Firefox */
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;

export const SearchTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  padding: 3rem 2rem;
  text-align: right;
`;

export const HitContainer = styled.div`
  margin-bottom: 15px;

  p {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.fontSizeMedium};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizeSmall};
    color: ${({ theme }) => theme.offWhiteDarken};
  }

  ${medias.greaterThan('md')`
    p {
      font-size: ${({ theme }) => theme.fontSizeLarge};
    }

    span {
      font-size: ${({ theme }) => theme.fontSizeNormal};
      color: ${({ theme }) => theme.offWhiteDarken};
    }

  `};
`;

export const NoResults = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.offWhiteDarken};
  font-size: ${({ theme }) => theme.fontSizeMedium};
`;
