import React, { Component } from 'react';
import logo from '../../assets/vigilo.png';
import './AppBar.css';

class AppBar extends Component {
  render() {
    return (
      <div className="app-bar">
        <h1>XCOM</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    );
  }
}

export default AppBar;
