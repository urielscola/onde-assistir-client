import React from 'react';
import * as Styles from './styles';

const Spacing = ({ appearence }) => (
  <Styles.Container
    appearence={appearence}
    aria-hidden="true"
    data-testid="spacing"
  />
);

Spacing.defaultProps = {
  appearence: 'medium'
};

export default Spacing;
