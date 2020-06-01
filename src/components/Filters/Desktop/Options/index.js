import React, { useState, useRef, useCallback } from 'react';
import Icon from '../../../Icon';
import Scrollable from '../../../Scrollable';
import * as Styles from './styles';
import { ListItem } from '../../styles';
import { useOnClickOutside } from 'src/utils';

const Options = ({ list, title, sKey, filters, handleChange, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, useCallback(() => setIsOpen(false), [setIsOpen]));

  return (
    <Styles.Container>
      <Styles.Button isOpen={isOpen} isActive={isActive} onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <Icon variant="arrow-down" size={20} color="#fff" />
      </Styles.Button>
      <Styles.ListContainer isOpen={isOpen} ref={ref}>
        <Scrollable maxHeight="200px">
          <ul>
            {list.map(item => (
              <ListItem
                key={item.value}
                active={filters[sKey].includes(item.value)}
                onClick={() => handleChange(sKey, item.value)}
              >
                <p>{item.label}</p>
              </ListItem>
            ))}
          </ul>
        </Scrollable>
      </Styles.ListContainer>
    </Styles.Container>
  )
}

export default Options;