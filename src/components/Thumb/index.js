import React from 'react';
import { Link } from 'gatsby';
import { Image } from '../index';
import * as Styles from './styles';

const Thumb = ({ thumb }) => {
  return (
    <Styles.Container>
      <Link to={'/' + thumb.node.slug} title={thumb.node.title}>
        <Image src={thumb.node.cover} alt={thumb.node.title} hasThumb={true} />
        <Styles.Title>{thumb.node.title}</Styles.Title>
      </Link>
    </Styles.Container>
  );
};

export default Thumb;
