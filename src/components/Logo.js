import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Logo = props => {
  const data = useStaticQuery(
    graphql`
      query MyLogo {
        file(relativePath: {eq: "assets/logo.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );

  const classes = [`logo__container ${props.hidden && "logo__container--hidden"}`];

  return (
    <div className={classes}>
      <AniLink fade duration={1.3} to="/">
        <GatsbyImage className="logo__image" image={data.file.childImageSharp.gatsbyImageData} alt="Logo" />
      </AniLink>
    </div>
  )
};

export default Logo;