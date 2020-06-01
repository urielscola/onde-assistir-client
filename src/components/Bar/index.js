import React from 'react';
import * as Styles from './styles';

const Bar = ({ children, ...props }) => (
  <Styles.Container {...props}>{children}</Styles.Container>
)

export default Bar;