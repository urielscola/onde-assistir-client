import React from 'react';
import { LazyImage } from 'react-lazy-images';

const Image = ({ src, alt, placeholder }) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      placeholder={({ _, ref }) => (
        <img ref={ref} src={placeholder || src} alt={alt} />
      )}
      actual={({ imageProps }) => <img {...imageProps} alt={alt} />}
    />
  );
};

export default Image;
