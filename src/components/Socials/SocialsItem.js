import React from 'react';

import { IconContext } from "react-icons";

const SocialsItem = props => (
  <li className="socialsList__item">
    <a className="socialsList__link" href={props.link} target="_blank" rel="noopener noreferrer">
      <IconContext.Provider value={{color: props.color, className: "social-icon"}}>
        <div className="social-icon__container">
          {props.children}
        </div>
      </IconContext.Provider>
    </a>
  </li>
)

export default SocialsItem;