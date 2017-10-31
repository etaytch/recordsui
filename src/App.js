import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Records from './components/records';
import UserRecord from './components/user-record';

class App extends Component {
  render() {
    return (
      <div >
        <UserRecord />
        <Records />
      </div>
    );
  }
}

export default App;
