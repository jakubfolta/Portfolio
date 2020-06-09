import React from 'react';

import '../styles/sass/main.scss';
import 'typeface-architects-daughter';

const Layout = props => (
  <div className="layout">
    {props.children}
  </div>
);


export default Layout;