import React from 'react';
import Header from '../components/Header/Header';
import Profile from './Profile';
import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
