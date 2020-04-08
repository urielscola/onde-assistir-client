import React from 'react';
import ReadMoreReact from 'read-more-react';
import * as Styles from './styles';

const ReadMore = ({ text, visible = 100 }) => (
  <Styles.Container>
    <ReadMoreReact
      text={text}
      min={visible}
      ideal={visible}
      max={visible + 50}
      readMoreText="ver mais"
    />
  </Styles.Container>
);

export default ReadMore;
