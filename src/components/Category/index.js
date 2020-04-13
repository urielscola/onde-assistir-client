import React from 'react';
import { Link } from 'gatsby';
import * as Styles from './styles';

const Category = ({ category, ...props }) => (
  <Styles.Container {...props}>
    <Link to={category.link} title={category.title}>
      <Styles.Background color={category.color}>
        <Styles.Title>{category.title}</Styles.Title>
      </Styles.Background>
    </Link>
  </Styles.Container>
);

export default Category;
