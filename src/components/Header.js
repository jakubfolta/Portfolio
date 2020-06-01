import React from 'react';

import Menu from './Menu';

const Header = props => (
  <header className="header">
    {props.children}
    <Menu />
  </header>
)

export default Header;