import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import { Link } from 'gatsby';

const NavigationItem = props => (
  <CSSTransition>
    <li className="navigation__item">
      <Link to={props.link} className="navigation__link">{props.children}</Link>
    </li>
  </CSSTransition>
);

export default NavigationItem;