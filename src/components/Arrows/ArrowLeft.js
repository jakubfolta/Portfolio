import React from 'react';

import { Link } from 'gatsby';

const ArrowLeft = props => (
  <div className="arrow__container">
    <Link
      to={props.page}
      className="arrow__container-link">
      <span className="arrow__left">{props.pageName}</span>
      </Link>
  </div>
)

export default ArrowLeft;