import React from 'react';
import { Link } from 'gatsby';
import { Image } from '../index';
import * as Styles from './styles';
import noImage from 'src/assets/images/no-cover.png';

const Thumb = ({ thumb, showInfo = true }) => {
  const item = thumb.node || thumb;
  const [id] = item.cover ? item.cover.split('.') : [null];
  const image = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + item.cover : noImage;
  const placeholder = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + id + '_thumb.png' : noImage;
  const sources = typeof item.sources === 'number' ? item.sources : item.sources.length;

  return (
    <Styles.Container>
      <Link to={'/' + item.slug} title={item.title}>
        <Image
          src={image}
          placeholder={placeholder}
          alt={item.title}
        />
        {showInfo && (
          <>
            <Styles.Year>{item.year}</Styles.Year>
            <Styles.Sources>
              {sources}{' '}
              {sources === 1 ? 'fonte' : 'fontes'}
            </Styles.Sources>
            <Styles.Title>{item.title}</Styles.Title>
          </>
        )}
      </Link>
    </Styles.Container>
  );
};

export default Thumb;
