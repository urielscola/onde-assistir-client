import React from 'react';
import { LazyImage } from 'react-lazy-images';

const Image = ({ src, alt }) => {
  const source = require(`../../assets/images/${src}`);
  return (
    <LazyImage
      src={source}
      alt={alt}
      placeholder={({ _, ref }) => <img ref={ref} src={source} alt={alt} />}
      actual={({ imageProps }) => <img {...imageProps} />}
    />
  );
};

export default Image;
