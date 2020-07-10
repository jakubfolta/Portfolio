import React from 'react';

import '../styles/sass/main.scss';
import 'typeface-architects-daughter';

const Layout = props => (
  <main className="layout">
    {props.children}
  </main>
);


export default Layout;