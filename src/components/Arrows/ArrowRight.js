import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ArrowRight = props => (
  <div className="arrow__container arrow__container--right">
    <AniLink
      fade
      duration={1.3}
      to={props.page}
      className="arrow__container-link">
      <span className="arrow arrow--right"></span>
      <span className="arrow__title arrow__title--right">{props.pageName}</span>
    </AniLink>
  </div>
)

export default ArrowRight;