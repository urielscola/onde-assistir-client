import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Layout, SEO, Container, Thumb, FlexDiv } from 'src/components';
import * as Styles from './category/category-styles';

const TITLES = {
  movie: 'Filmes',
  serie: 'Séries',
  anime: 'Animes',
  action: 'Ação',
  mistery: 'Mistério',
  drama: 'Drama',
  romance: 'Romance',
  sport: 'Esportes',
  animation: 'Animação',
  family: 'Família',
  sciFy: 'Sci-fi',
  war: 'Guerra',
  history: 'História',
  thriller: 'Thriller',
  militar: 'Militar',
  adventure: 'Aventura',
};

const CategoryType = props => {
  const { perPage, type, items } = props.pageContext;
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState(items.slice(0, perPage));

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const skip = page * perPage;
    const limit = skip + perPage;
    setPage(nextPage);
    return setArr([...arr, ...items.slice(skip, limit)]);
  };

  return (
    <Layout>
      <SEO
        title={`${TITLES[type]} - Onde Assistir Online`}
        description={`9 serviços de stream, uma só pesquisa. Mais de ${items.length} títulos em ${TITLES[type]} para você aproveitar.`}
      >
        <link rel="canonical" href={props.path} />
      </SEO>
      <Styles.Banner>
        <h3>{TITLES[type]}</h3>
      </Styles.Banner>
      <Container>
        <Styles.Container>
          <InfiniteScroll
            hasMore={arr.length !== items.length}
            dataLength={arr.length}
            next={handleLoadMore}
          >
            <FlexDiv flexWrap="wrap">
              {arr.map(item => (
                <Thumb thumb={item} key={item.node.slug} hasThumb={true} />
              ))}
            </FlexDiv>
          </InfiniteScroll>
        </Styles.Container>
      </Container>
    </Layout>
  );
};

export default CategoryType;
