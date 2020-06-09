import React from 'react';

const Menu = props => {
  return (
    <div className="menu" onClick={props.clicked}>
      <span className="menu__icon">&nbsp;</span>
    </div>
  )
};

export default Menu;