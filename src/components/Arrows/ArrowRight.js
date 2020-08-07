import React from 'react';

import { Link } from 'gatsby';

const ArrowRight = props => (
  <div className="arrow__container arrow__container--right">
    <Link
      to={props.page}
      className="arrow__container-link">
      <span className="arrow arrow--right"></span>
      <span className="arrow__title arrow__title--right">{props.pageName}</span>
      </Link>
  </div>
)

export default ArrowRight;