import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavigationItem = props => (
  <li className="navigation__item">
    <AniLink
      fade
      duration={.5}
      to={props.link}
      activeClassName="active"
      className="navigation__link">{props.children}</AniLink>
  </li>
);

export default NavigationItem;