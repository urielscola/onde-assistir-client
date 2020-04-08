import React from 'react';
import * as Styles from './styles';

const Burger = ({ isOpen, onClick }) => {
  return (
    <Styles.Burger isOpen={isOpen} onClick={onClick}>
      <div />
      <div />
      <div />
    </Styles.Burger>
  );
};

export default Burger;
