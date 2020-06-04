import React from 'react';

const SocialsItem = props => (
  <li className="socialsList__item">
    <a className="socialsList__link" href={props.link} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  </li>
)

export default SocialsItem;