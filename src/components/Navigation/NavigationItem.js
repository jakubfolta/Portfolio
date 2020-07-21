import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import { Link } from 'gatsby';

const NavigationItem = props => {
  const animationTiming = {
    enter: 300,
    exit: 1000
  }

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        // enterActive: 'navigation__link',
        // enterDone: 'navigation__link',
        // exitActive: 'navigation__link'
      }} >
      <li className="navigation__item">
        <Link to={props.link} className="navigation__link">{props.children}</Link>
      </li>
    </CSSTransition>
  )
};

export default NavigationItem;