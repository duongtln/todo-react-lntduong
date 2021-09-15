import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export default class NavComponent extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/todo">
          Todo
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/user">
          User
        </NavLink>
      </div>
    );
  }
}
