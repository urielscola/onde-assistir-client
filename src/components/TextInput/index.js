import React from 'React';
import { FlexDiv } from 'src/components';
import * as Styles from './styles';

const TextInput = ({ label, name, placeholder, required = true, ...props }) => {
  return (
    <div style={{ color: '#5f5f5f' }}>
      <FlexDiv flexDirection="column">
        <label htmlFor={name}>
          {label} <span style={{ color: 'red' }}>*</span>
        </label>
        <Styles.Input id={name} placeholder={placeholder} required={required} {...props} />
      </FlexDiv>
    </div>
  )
};

export default TextInput;


