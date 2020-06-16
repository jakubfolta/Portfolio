import React from 'react';

const Backdrop = props => {
  const classes = ['backdrop'];

  if (props.show) {
    classes.push('show');
  }

  return (
    <div onClick={props.clicked} className={classes.join(' ')}></div>
  )
};

export default Backdrop;