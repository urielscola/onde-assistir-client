import React from 'react';
import Img from 'gatsby-image';

const Image = ({ src }) => {
  if (typeof src === 'string')
    return <img src={`../assets/images/${src}`} alt="" />;
  if (src.fluid) {
    return <Img fluid={src.fluid} />;
  } else if (src.fixed) {
    return <Img fixed={src.fixed} />;
  }
};

export default Image;
