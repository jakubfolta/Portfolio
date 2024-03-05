import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  
  const seo = {
    description: description || site.siteMetadata.description,
    title: title || site.siteMetadata.title
  }
  
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired
}
