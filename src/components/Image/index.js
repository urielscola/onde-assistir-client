import React from 'react';
import { LazyImage } from 'react-lazy-images';

const Image = ({ src, alt, hasThumb = false }) => {
  let source;
  try {
    source = require(`../../assets/images/${src}`);
  } catch (err) {
    console.log(err);
    source = '';
  }
  return (
    <LazyImage
      src={source}
      alt={alt}
      placeholder={({ _, ref }) => <img ref={ref} src={source} alt={alt} />}
      actual={({ imageProps }) => <img {...imageProps} alt={alt} />}
    />
  );
};

export default Image;
