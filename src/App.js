import React, { Component } from 'react';
import Header from './components/Header';
import EnterNumber from './components/EnterNumber';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EnterNumber />
      </div>
    );
  }
}

export default App;
