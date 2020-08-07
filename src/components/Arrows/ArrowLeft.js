import React from 'react';

import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ArrowLeft = props => (
  <div className="arrow__container arrow__container--left">
    <AniLink
      swipe
      direction="right"
      to={props.page}
      className="arrow__container-link">
      <span className="arrow arrow--left"></span>
      <span className="arrow__title arrow__title--left">{props.pageName}</span>
    </AniLink>
  </div>
)

export default ArrowLeft;