import React from 'react';
import logo from '../../GitHub-Mark-64px.png';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>My GitHub Portfolio</h1>
  </header>
);

export default Header;
