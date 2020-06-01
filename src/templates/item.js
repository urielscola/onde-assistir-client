import React, { useState, useEffect, useCallback } from 'react';
import { Layout, SEO } from 'src/components';
import { api } from 'src/services';
import { makeJSONLD } from 'src/utils';
import ItemMobile from './item/item-mobile';
import ItemDesktop from './item/item-desktop';

const ALLOWED_SOURCES = [
  'Amazon Prime Video',
  'Netflix',
  'Claro Video',
  'Crunchyroll',
  'Globo Play',
  'Fox Play',
  'Fox Premium',
  'Telecine Play',
  'HBO Go',
];

const Item = ({ pageContext }) => {
  const payload = pageContext.item;
  const [recommended, setRecommended] = useState([]);
  const validSources = payload.sources ? payload.sources.filter(source =>
    ALLOWED_SOURCES.includes(source.name)
  ) : [];

  const ld = makeJSONLD(payload);

  const fetchRecommended = useCallback(async () => {
    const [id] = payload.cover ? payload.cover.split('.') : [null];
    if (id) {
      const { list } = await api.recommended(payload.cover.split('.')[0]);
      setRecommended(list);
    }
  }, [setRecommended, payload]);

  useEffect(() => {
    fetchRecommended();
  }, [fetchRecommended]);

  return (
    <Layout>
      <SEO
        title={`${payload.title} - Onde Assistir Online`}
        description={`${validSources} ${
          validSources.length === 1 ? 'fonte encontrada' : ' fontes encontradas'
          }. ${payload.description}`}
      >
        <link rel="canonical" href={`/${payload.slug}`} />
        <script type="application/ld+json">{ld}</script>
      </SEO>
      <ItemMobile payload={payload} related={recommended} validSources={validSources} />
      <ItemDesktop payload={payload} related={recommended} validSources={validSources} />
    </Layout>
  );
};

export default Item;
