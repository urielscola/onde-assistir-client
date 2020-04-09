import React from 'react';
import { Link } from 'gatsby';
import * as Styles from './styles';

const Category = ({ title, slug, ...props }) => (
  <Styles.Container {...props}>
    <Link to={slug} title={title}>
      <Styles.Background>
        <Styles.Title>{title}</Styles.Title>
      </Styles.Background>
    </Link>
  </Styles.Container>
);

export default Category;
