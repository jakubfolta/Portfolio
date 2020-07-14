import React from 'react';

import { IconContext } from 'react-icons';

const SocialsItem = props => (
  <li className="socials__item">
    <a className="socials__link" href={props.link} target="_blank" rel="noopener noreferrer">
      <IconContext.Provider value={{color: props.color, className: "socials__icon"}}>
          {props.children}
      </IconContext.Provider>
    </a>
  </li>
);

export default SocialsItem;