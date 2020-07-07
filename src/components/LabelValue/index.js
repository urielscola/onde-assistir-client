import React from 'react';
import { FlexDiv, Topic } from '../index';
import * as Styles from './styles';

const LabelValue = ({ label, value, ...props }) => {
  return (
    <Styles.Container>
      <FlexDiv
        alignItems={props.isTags ? '' : 'center'}
        justifyContent="space-between"
        flexDirection={props.isTags ? 'column' : 'row'}
        marginBottom="0"
        {...props}
      >
        <Topic
          {...props}
          title={label}
          marginBottom="0"
          fontSize="16px !important"
        />
        <Styles.Value {...props}>{value}</Styles.Value>
      </FlexDiv>
    </Styles.Container>
  );
};

export default LabelValue;
