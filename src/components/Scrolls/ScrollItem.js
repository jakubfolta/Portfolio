import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ScrollItem = props => (
  <li className="scrolls__item">
    <AniLink
      fade
      duration={.5}
      to={props.link}>
      <GatsbyImage className="scrolls__item-image" image={props.image} alt="Drawing of the scroll" />
      <h3 className="scrolls__item-title">{props.title}</h3>
      <p className="scrolls__item-description">{props.description}</p>
    </AniLink>
  </li>
);

export default ScrollItem;