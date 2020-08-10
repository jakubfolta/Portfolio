import React from 'react';

const Menu = props => {
  const classes = ['menu'];

  if (props.show) {
    classes.push('clicked');
  } else {
    classes.push('unclicked');
  }

  return (
    <div className={classes.join(' ')} onClick={props.clicked}>
      <span className="menu__icon"></span>
    </div>
  )
};

export default Menu;