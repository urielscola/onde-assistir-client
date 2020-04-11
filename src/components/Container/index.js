import React from 'react';
import * as Styles from './styles';

const Container = ({ children, ...props }) => (
  <Styles.Container {...props}>{children}</Styles.Container>
);

export default Container;
