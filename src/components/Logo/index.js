import React from 'react';
import { FlexDiv } from 'src/components';
import * as Styles from './styles';
import logo from 'src/assets/images/logo.png';

const Logo = ({ title = 'Onde Assistir Online' }) => {
  return (
    <Styles.Container>
      <FlexDiv alignItems="center">
        <img src={logo} />
        <h2>{title}</h2>
      </FlexDiv>
    </Styles.Container>
  );
};

export default Logo;
