import React from 'react';
import { Link } from 'gatsby';
import { FlexDiv } from 'src/Components';
import * as Styles from './styles';

const Pagination = props => (
  <Styles.PaginationWrapper>
    <FlexDiv>
      {!props.isFirst && (
        <Link to={props.prevPage} rel="prev" cover direction="left">
          ← Anterior
        </Link>
      )}
      <p>
        {props.currentPage} de {props.numPages}
      </p>
      {!props.isLast && (
        <Link to={props.nextPage} rel="next" cover direction="right">
          Próxima →
        </Link>
      )}
    </FlexDiv>
  </Styles.PaginationWrapper>
);

export default Pagination;
