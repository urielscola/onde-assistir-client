import React from 'react';
import { Link } from 'gatsby';
import * as Styles from './styles';

const Thumb = ({ thumb }) => {
  return (
    <Styles.Container>
      <Link to={thumb.node.slug} title={thumb.node.title}>
        <img
          src={require(`../../assets/images/${thumb.node.cover}`)}
          alt={thumb.node.title}
        />
        <Styles.Title>{thumb.node.title}</Styles.Title>
      </Link>
    </Styles.Container>
  );
};

export default Thumb;
