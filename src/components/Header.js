import React from 'react';

import Menu from './Menu';

const Header = props => (
  <header className="header">
    {props.children}
    <Menu clicked={props.clicked}/>
  </header>
);

export default Header;