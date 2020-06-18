import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';

const Backdrop = props => {
  const animationTiming = {
    enter: 1000,
    exit: 1900
  }

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enterActive: 'showBackdrop',
        enterDone: 'showBackdrop',
        exitActive: 'backdrop'
      }}>
      <div onClick={props.clicked} className="backdrop"></div>
    </CSSTransition>
  )
};

export default Backdrop;