import React from 'react';

const SocialsItem = props => (
  <li class="socialsList__item">
    <a class="socialsList__link" href={props.link} target="_blank">{props.children}</a>
  </li>
)

export default SocialsItem;