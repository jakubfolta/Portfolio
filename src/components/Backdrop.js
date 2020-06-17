import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';

const Backdrop = props => {
  const classes = ['backdrop'];

  if (props.show) {
    classes.push('showBackdrop');
  }

  const animationTiming = {
    enter: 1000,
    exit: 2100
  }

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming} >
      <div onClick={props.clicked} className={classes.join(' ')}></div>
    </CSSTransition>
  )
};

export default Backdrop;