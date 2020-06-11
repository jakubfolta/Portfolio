import React from 'react';

const Backdrop = props => (
  props.show ? <div className="backdrop show"></div> : <div className="backdrop"></div>
);

export default Backdrop;