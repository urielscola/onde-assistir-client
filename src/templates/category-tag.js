import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  SEO,
  Container,
  Thumb,
  Pagination,
  FlexDiv,
} from 'src/components';
import * as Styles from './category/category-styles';

const CATEGORIES = {
  Anime: 'animes',
};

const TITLES = {
  Anime: 'Animes',
};

const CategoryTag = props => {
  const items = props.data.items.edges;
  const { currentPage, numPages, type } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? `/categorias/${CATEGORIES[type]}`
      : `/categorias/${CATEGORIES[type]}/${currentPage - 1}`;
  const nextPage = `/categorias/${CATEGORIES[type]}/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title={TITLES[type]} />
      <Styles.Banner>
        <h3>{TITLES[type]}</h3>
      </Styles.Banner>
      <Container>
        <Styles.Container>
          <FlexDiv justifyContent="space-around" flexWrap="wrap">
            {items
              .filter(item => !!item.node.cover)
              .map(item => (
                <Thumb thumb={item} key={item.slug} />
              ))}
          </FlexDiv>
        </Styles.Container>
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Container>
    </Layout>
  );
};

export default CategoryTag;

export const query = graphql`
  query($skip: Int!, $limit: Int!, $tag: [String]) {
    items: allMongodbTestItems(
      limit: $limit
      skip: $skip
      filter: { tags: { in: $tag } }
    ) {
      edges {
        node {
          slug
          title
          cover
        }
      }
    }
  }
`;
