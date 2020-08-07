import React from 'react';

import { Link } from 'gatsby';

const ArrowRight = props => (
  <div className="arrow__container">
    <Link
      to={props.page}
      className="arrow__container-link">
      <span className="arrow__right"></span>
      <span className="arrow__title">{props.pageName}</span>
      </Link>
  </div>
)

export default ArrowRight;