import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import './Header.css';

const Header = ({ logo }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <Link url="https://reactjs.org" title="Learn React" />
  </header>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
