import React, { memo } from 'react';
import * as Styles from './styles';

const Button = ({ onClick, title, ...props }) => {
  return (
    <Styles.Container onClick={onClick} {...props}>
      {title}
    </Styles.Container>
  )
};

export default memo(Button);