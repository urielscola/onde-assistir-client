import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, keywords, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: `sqL_YJIrxAkJOE_Cs1DZpWXrNDrfP-jYONIpM7338u0`,
        },
      ].concat(meta)}
    >
      <script data-ad-client="ca-pub-6648930024026133" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      {children}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  description: ``,
};

export default SEO;
