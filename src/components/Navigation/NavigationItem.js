import React from 'react';
import { Link } from 'gatsby';

const NavigationItem = props => {
  const classes = ['navigation__item'];

  if (props.show) {
    classes.push('slide');
  }

  return (
    <li className={classes.join(' ')}>
      <Link to={props.link} className="navigation__link">{props.children}</Link>
    </li>
  )
};

export default NavigationItem;