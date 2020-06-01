import React from 'react';
import { Image } from 'src/components';
import * as Styles from './styles';

const Badge = ({ src, name, ...props }) => (
  <Styles.Badge {...props}>
    <Image src={require(`../../assets/images/${src}`)} alt={name} />
  </Styles.Badge>
);

export default Badge;
