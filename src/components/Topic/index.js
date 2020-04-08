import React from 'react';
import * as Styles from './styles';

const Topic = ({ title, children, ...props }) => {
  return (
    <Styles.Container {...props}>
      <Styles.Topic {...props}>{title}</Styles.Topic>
      {children && <div>{children}</div>}
    </Styles.Container>
  );
};

export default Topic;
