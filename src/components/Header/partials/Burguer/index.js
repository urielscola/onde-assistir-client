import React from 'react';
import Icon from '../../../Icon';

const Burger = ({ isOpen, onClick }) => {
  const variant = isOpen ? 'close' : 'menu';

  return (
    <Icon variant={variant} size={32} onClick={onClick} />
  );
};

export default Burger;
