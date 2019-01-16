import React, { Component } from 'react';
import Header from './components/Header';
import EnterNumber from './components/EnterNumber';
import CurrentTotal from './components/CurrentTotal';
import History from './components/History';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      numHist: []
    }
  }

  addCurrentNum = (currentNum) => {
    console.log(currentNum);
    this.setState({
      number: currentNum
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <EnterNumber addCurrentNum={this.addCurrentNum}/>
        <br />
        <CurrentTotal />
        <br />
        <History />
      </div>
    );
  }
}

export default App;
