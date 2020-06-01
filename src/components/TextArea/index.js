import React from 'react';
import { FlexDiv } from 'src/components';
import * as Styles from './styles';

const TextArea = ({ label, name, placeholder, required = true, ...props }) => {
  return (
    <div style={{ color: '#5f5f5f' }}>
      <FlexDiv flexDirection="column">
        <label htmlFor={name}>
          {label} <span style={{ color: 'red' }}>*</span>
        </label>
        <Styles.Textarea id={name} placeholder={placeholder} required={required} {...props} />
      </FlexDiv>
    </div>
  )
};

export default TextArea;


