import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import { Link } from 'gatsby';

const NavigationItem = props => (
  <li className="navigation__item">
    <Link to={props.link} className="navigation__link">{props.children}</Link>
  </li>
);

export default NavigationItem;