import React, { Fragment } from 'react';

import '../styles/sass/main.scss';
import 'typeface-architects-daughter';
import Menu from '../components/Menu';
import Backdrop from '../components/Backdrop';
import NavigationList from '../components/Navigation/NavigationList';

const Layout = props => (
  <Fragment>
    <Menu
      show={props.show}
      clicked={props.clicked} />
    <Backdrop
      show={props.show}
      clicked={props.clicked} />
    <NavigationList show={props.show} />
    <main className="layout">
      {props.children}
    </main>
  </Fragment>
);

export default Layout;