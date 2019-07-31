import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO() {
  const {
    site: {
      siteMetadata: { title, titleMeta, description, url, image }
    }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleMeta
            description
            url
            image
          }
        }
      }
    `
  );

  const meta = [
    {
      name: `description`,
      content: description
    },
    {
      property: `og:title`,
      content: titleMeta
    },
    {
      property: `og:description`,
      content: description
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:url`,
      content: `${url}`
    },
    {
      property: `og:image`,
      content: `${url}${image}`
    },
    {
      property: `og:image:type`,
      content: `image/png`
    },
    {
      property: `og:image:alt`,
      content: `terminal`
    }
  ].concat([]);

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      titleTemplate={title}
      meta={meta}
    />
  );
}

export default SEO;
