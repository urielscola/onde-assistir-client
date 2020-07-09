import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMediaQuery } from 'react-responsive';
import { Layout, SEO, Container, Thumb, FlexDiv, Bar, Spacing, Breadcrumb, Filters, Responsive, Anchor, Icon } from 'src/components';
import { api } from 'src/services';
import { getQuery, replaceQueryParams } from 'src/utils';
import * as Styles from './styles';

const INITIAL_FILTERS = {
  sources: [],
  tags: [],
  type: []
};

const Cathalog = props => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const [items, setItems] = useState({
    list: [],
    pages: 0,
    count: 0,
  });

  const handleChange = async (key, value) => {
    const newValues = [...filters[key]];

    if (newValues.includes(value)) {
      newValues.splice(newValues.indexOf(value), 1);
    } else {
      newValues.push(value);
    }

    const newFilters = { ...filters, [key]: newValues };
    setFilters(newFilters);
    setPage(1);
    replaceQueryParams(newFilters);

    const results = await api.search(newFilters, {
      page: 1,
    });
    setItems(results);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
    const results = await api.search(filters, {
      page: nextPage,
    });
    const list = [...items.list, ...results.list];
    setItems({ ...results, list });
    return setLoading(false);
  };

  useEffect(() => {
    const fetchInitialResults = async () => {
      setLoading(true);
      const query = { ...filters, ...getQuery() };
      setFilters(query);
      const results = await api.search(query, {
        page: 1
      });
      setItems(results);
      setLoading(false);
    }

    fetchInitialResults();
  }, []);

  return (
    <Layout>
      <SEO
        title={`Catálogo - Onde Assistir Online`}
        description={`9 serviços de stream, uma só pesquisa.`}
      >
        <link rel="canonical" href={props.path} />
      </SEO>
      <Bar marginBottom="0">
        <Container>
          <Spacing appearence={isMobile ? 'small' : 'medium'} />
          <Breadcrumb items={[{ label: 'Catálogo' }]} />
          <Spacing appearence={isMobile ? 'x-small' : 'medium'} />
          <h3>Catálogo</h3>
          <Spacing appearence="small" />
        </Container>
      </Bar>
      <Responsive.NotDesktop>
        <Filters.Bar count={items.count.toLocaleString()} />
      </Responsive.NotDesktop>
      <Responsive.Desktop>
        <Filters.Desktop filters={filters} handleChange={handleChange} />
      </Responsive.Desktop>
      <Container>
        <Responsive.Desktop>
          <Spacing appearence="large" />
          <FlexDiv justifyContent="flex-end">
            <p>{items.count.toLocaleString()} resultados</p>
          </FlexDiv>
        </Responsive.Desktop>
        <Spacing appearence="large" />
        <Styles.Container>
          {items.list && items.list.length > 0 && (
            <InfiniteScroll
              hasMore={items.pages !== page}
              dataLength={items.list.length}
              next={handleLoadMore}
            >
              <FlexDiv flexWrap="wrap">
                {items.list.map(item => (
                  <Thumb thumb={item} key={item.slug} />
                ))}
              </FlexDiv>
            </InfiniteScroll>
          )}
        </Styles.Container>
        {loading && (
          <FlexDiv justifyContent="center" flexDirection="column" alignItems="center">
            <Icon variant="load" size={40} />
            <p>Carregando...</p>
          </FlexDiv>
        )}
      </Container>
      <Filters.Mobile count={items.length} filters={filters} handleChange={handleChange} />
      <Anchor isVisible={page > 1} />
    </Layout>
  );
};

export default Cathalog;
