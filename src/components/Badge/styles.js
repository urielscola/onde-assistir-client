import styled from 'styled-components';
import { space } from 'styled-system'

export const Badge = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  img {
    border-radius: 5px;
    width: 50px;
  }

  @media (min-width: 767px) {
    margin-right: 15px;
  }

  ${space};
`;
