import React from 'react';
import { LazyImage } from 'react-lazy-images';

const Image = ({ src, alt, hasThumb = false }) => {
  const source = require(`../../assets/images/${src}`);
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
