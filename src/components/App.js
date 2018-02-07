import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../styles/App.css';
import Calculator from './calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Calculator</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
