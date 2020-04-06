import React from 'react';
import ReadMoreReact from 'read-more-react';
import * as Styles from './styles';

const ReadMore = ({ text }) => (
  <Styles.Container>
    <ReadMoreReact
      text={text}
      min={100}
      ideal={100}
      max={150}
      readMoreText="ver mais"
    />
  </Styles.Container>
);

export default ReadMore;
