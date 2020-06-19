import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import NavigationItem from './NavigationItem';

const NavigationList = props => {
  const animationTiming = {
    enter: 100,
    exit: 2000
  }

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enterActive: 'showNav',
        enterDone: 'showNav',
        exitActive: 'navigation'
      }} >
      <nav className="navigation">
        <ul className="navigation__list">
          <NavigationItem link="/">Main haven</NavigationItem>
          <NavigationItem link="/about">About me</NavigationItem>
          <NavigationItem link="/portfolio">Portfolio</NavigationItem>
          <NavigationItem link="/contact">Contact</NavigationItem>
        </ul>
      </nav>
    </CSSTransition>
  )
};

export default NavigationList;