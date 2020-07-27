import React from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';

const Backdrop = props => {
  const animationTiming = {
    enter: 1000,
    exit: 2300
  }

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enterActive: 'showBackdrop',
        enterDone: 'showBackdrop'
      }}>
      <div role="button" tabIndex={1} onClick={props.clicked} onKeyDown={props.clicked} className="backdrop"></div>
    </CSSTransition>
  )
};

export default Backdrop;