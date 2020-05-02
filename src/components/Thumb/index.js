import React from 'react';
import { Link } from 'gatsby';
import { Image } from '../index';
import * as Styles from './styles';

const Thumb = ({ thumb }) => {
  const [id] = thumb.node.cover.split('.');
  return (
    <Styles.Container>
      <Link to={'/' + thumb.node.slug} title={thumb.node.title}>
        <Image
          src={'https://dfn8uuw9d31r.cloudfront.net/' + thumb.node.cover}
          placeholder={
            'https://dfn8uuw9d31r.cloudfront.net/' + id + '_thumb.png'
          }
          alt={thumb.node.title}
        />
        <Styles.Title>{thumb.node.title}</Styles.Title>
      </Link>
    </Styles.Container>
  );
};

export default Thumb;
