import React from 'react';
import { FlexDiv } from '../index';
import * as Styles from './styles';

const LabelValue = ({ label, value, ...props }) => {
  return (
    <FlexDiv
      justifyContent="space-between"
      flexDirection={props.isTags ? 'column' : 'row'}
      {...props}
    >
      <Styles.Label {...props}>{label}</Styles.Label>
      <Styles.Value {...props}>{value}</Styles.Value>
    </FlexDiv>
  );
};

export default LabelValue;
