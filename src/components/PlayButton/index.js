import React from 'react';
import Icon from '../Icon';
import * as Styles from './styles';

const PlayButton = ({ title }) => (
  <Styles.Container>
    <Icon variant="play" size={25} color="#fff" /> {title}
  </Styles.Container>
);

export default PlayButton;