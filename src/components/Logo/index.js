import React from 'react';
import { FlexDiv, Icon } from 'src/components';
import * as Styles from './styles';
import { theme } from 'src/assets/styles';

const Logo = () => {
  return (
    <Styles.Container>
      <FlexDiv alignItems="center">
        <h2><span>Onde</span> Assistir <Icon variant="play" color={theme.white} size={27} /> Online</h2>
      </FlexDiv>
    </Styles.Container>
  );
};

export default Logo;
