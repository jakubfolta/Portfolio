import React from 'react';

import { Link } from 'gatsby';

const NavigationItem = props => (
  <li className="navigation__item">
    <Link
      exact
      to={props.link}
      activeClassName="active"
      className="navigation__link">{props.children}</Link>
  </li>
);

export default NavigationItem;