import React from 'react';

import NavigationItem from './NavigationItem';

const NavigationList = props => {
  const classes = ['navigation'];

  if (props.show) {
    classes.push('showNav');
  }

  return (
    <nav className={classes.join(' ')}>
      <ul className="navigation__list">
        <NavigationItem link="/about">About me</NavigationItem>
        <NavigationItem link="/portfolio">Portfolio</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
      </ul>
    </nav>
  )
};

export default NavigationList;