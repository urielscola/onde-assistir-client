import React from 'react';
import { Layout, SEO } from 'src/components';
import { makeJSONLD } from 'src/utils';
import ItemMobile from './item/item-mobile';
import ItemDesktop from './item/item-desktop';

const ALLOWED_SOURCES = [
  'Amazon Prime Video',
  'Netflix',
  'Claro Video',
  'Crunchyroll',
  'Globoplay',
  'Fox Play',
  'Fox Premium',
  'Telecine Play',
  'HBO Go',
];

const Item = ({ pageContext }) => {
  const payload = pageContext.item;
  const { relateds } = pageContext;
  const validSources = payload.sources.filter(source =>
    ALLOWED_SOURCES.includes(source.name)
  ).length;

  const ld = makeJSONLD(payload);

  return (
    <Layout>
      <SEO
        title={`${payload.title} - Onde Assistir Online`}
        description={`${validSources} ${
          validSources === 1 ? 'fonte encontrada' : ' fontes encontradas'
        }. ${payload.description}`}
      >
        <link rel="canonical" href={`/${payload.slug}`} />
        <script type="application/ld+json">{ld}</script>
      </SEO>
      <ItemMobile payload={payload} related={relateds} />
      <ItemDesktop payload={payload} related={relateds} />
    </Layout>
  );
};

export default Item;
