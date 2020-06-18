import React from 'react';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import NavigationItem from './NavigationItem';

const NavigationList = props => {
  const classes = ['navigation'];

  if (props.show) {
    classes.push('showNav');
  }

  return (
    <nav className={classes.join(' ')}>
      <TransitionGroup component="ul" className="navigation__list">
        <NavigationItem link="/about">About me</NavigationItem>
        <NavigationItem link="/portfolio">Portfolio</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
      </TransitionGroup>
    </nav>
  )
};

export default NavigationList;