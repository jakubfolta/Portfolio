import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query MyLogo {
        file(relativePath: {eq: "assets/logo.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <div className="logo__container">
      <Img className="logo__image" fluid={data.file.childImageSharp.fluid} alt="Logo" />
    </div>
  )
};

export default Logo;