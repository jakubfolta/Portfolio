import React from 'react';

import { Link } from 'gatsby';

const ArrowRight = props => (
  <div className="arrow__container">
    <Link
      to={props.page}
      className="arrow__container-link">
      <span className="arrow__right">{props.pageName}</span>
      </Link>
  </div>
)

export default ArrowRight;