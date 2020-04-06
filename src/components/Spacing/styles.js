import styled from 'styled-components/macro';
import { compose, space, variant } from 'styled-system';

const appearence = {
  prop: 'appearence',
  variants: {
    'x-small': {
      height: '10px'
    },
    small: {
      height: '20px'
    },
    medium: {
      height: '30px'
    },
    large: {
      height: '45px'
    },
    'x-large': {
      height: '60px'
    }
  }
};

export const Container = styled.div`
  ${compose(space, variant(appearence))};
`;
