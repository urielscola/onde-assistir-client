import React, { useCallback, memo } from 'react';
import { Icon } from 'src/components';
import { theme } from 'src/assets/styles';
import * as Styles from './styles';

const Anchor = ({ isVisible }) => {
  const onClick = useCallback(() => {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Styles.Container isVisible={isVisible} onClick={onClick}>
      <Icon variant="arrow-up" size={30} color={theme.white} />
    </Styles.Container>
  )
};

export default memo(Anchor);