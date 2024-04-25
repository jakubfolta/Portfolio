import React from "react";
import { graphql } from "gatsby";

export default function BlogPost({ data }) {
  const scroll = data.markdownRemark

  return (
    <div>
      <h1>{scroll.frontmatter.title}</h1>
      {/* <small>{scroll.frontmatter.date}</small> */}
      <div dangerouslySetInnerHTML={{ __html: scroll.html }} />
    </div>
  )
}

export const query = graphql`
  query ScrollQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`