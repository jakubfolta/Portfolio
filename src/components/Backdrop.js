import React from 'react';

const Backdrop = props => {
  let classes = ['backdrop'];

  if (props.show) {
    classes.push('show');
  }

  return (
    <div className={classes.join(' ')}></div>
  )
};

export default Backdrop;