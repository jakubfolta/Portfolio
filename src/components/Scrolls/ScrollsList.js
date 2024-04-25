import React from 'react';
import ScrollItem from './ScrollItem';
import { useStaticQuery, graphql } from 'gatsby';

const ScrollsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/scrolls/"}}
        sort: {frontmatter: {order: DESC}}
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              description
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const scrolls = data.allMarkdownRemark.edges.map(scroll =>
    <ScrollItem
      key={scroll.node.id}
      link={scroll.node.fields.slug}
      title={scroll.node.frontmatter.title}
      description={scroll.node.frontmatter.description}
      image={scroll.node.frontmatter.image.childImageSharp.gatsbyImageData} /> )

  return (
    <ul className="scrolls__list">
      {scrolls}
    </ul>
  );
};

export default ScrollsList;