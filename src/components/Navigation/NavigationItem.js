import React from 'react';
import { Link } from 'gatsby';

const NavigationItem = props => {

  return (
    <li className="navigation__item">
      <Link to={props.link} className="navigation__link">{props.children}</Link>
    </li>
  )
};

export default NavigationItem;