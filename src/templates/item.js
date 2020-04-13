import React from 'react';
import { Layout, SEO } from 'src/components';
import ItemMobile from './item/item-mobile';
import ItemDesktop from './item/item-desktop';

const Item = ({ pageContext }) => {
  const payload = pageContext.item;
  const { relateds } = pageContext;

  return (
    <Layout>
      <SEO title={payload.title} />
      <ItemMobile payload={payload} related={relateds} />
      <ItemDesktop payload={payload} related={relateds} />
    </Layout>
  );
};

export default Item;
