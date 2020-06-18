import React from 'react';

const Menu = props => {
  const classes = ['menu'];

  if (props.show) {
    classes.push('clicked');
  } else {
    classes.push('unclicked');
  }

  return (
    <button className={classes.join(' ')} onClick={props.clicked}>
      <span className="menu__icon">&nbsp;</span>
    </button>
  )
};

export default Menu;