import React from 'react';

import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavigationItem = props => (
  <li className="navigation__item">
    <AniLink
      fade
      direction="up"
      top="exit"
      duration={.5}
      to={props.link}
      activeClassName="active"
      className="navigation__link">{props.children}</AniLink>
  </li>
);

export default NavigationItem;