import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavigationItem = props => (
  <li className="navigation__item">
    <AniLink
      fade
      duration={.5}
      to={props.link}
      activeClassName="active"
      style={{pointerEvents: props.link === "/scrolls/" ? 'none' : 'auto', color: props.link === "/scrolls/" ? '#919191' : '#00E82B'}} // When removing this, remove !important in _navigation.scss as well
      className="navigation__link">{props.children}</AniLink>
  </li>
);

export default NavigationItem;