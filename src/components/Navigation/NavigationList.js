import React from 'react';

import NavigationItem from './NavigationItem';

const NavigationList = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <NavigationItem link="/about">About me</NavigationItem>
      <NavigationItem link="/portfolio">Portfolio</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  </nav>
);

export default NavigationList;