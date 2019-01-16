import React, { Component } from 'react';
import Header from './components/Header';
import EnterNumber from './components/EnterNumber';
import CurrentTotal from './components/CurrentTotal'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <EnterNumber />
        <br />
        <CurrentTotal />
      </div>
    );
  }
}

export default App;
