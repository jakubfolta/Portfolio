import React from 'react';

const Menu = props => {
  let classes = props.show ? ['menu', 'clicked'] : ['menu'];

  return (
    <button className={classes.join(' ')} onClick={props.clicked}>
      <span className="menu__icon">&nbsp;</span>
    </button>
  )
};

export default Menu;