import React from 'react';

import { Link } from 'gatsby';

const ArrowLeft = props => (
  <div className="arrow__container arrow__container--left">
    <Link
      to={props.page}
      className="arrow__container-link">
      <span className="arrow arrow--left"></span>
      <span className="arrow__title arrow__title--left">{props.pageName}</span>
      </Link>
  </div>
)

export default ArrowLeft;