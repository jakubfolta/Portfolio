import React from 'react';

const Menu = props => {
  let classes = props.clicked ? ['menu, clicked'] : ['menu'];

  return (
    <div className={classes.join(' ')} onClick={props.clicked}>
      <span className="menu__icon">&nbsp;</span>
    </div>
  )
};

export default Menu;