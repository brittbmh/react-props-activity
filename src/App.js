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
      total: 0,
      numHist: []
    }
  }

  addCurrentNum = (currentNum) => {
    console.log(currentNum);
    let currentTotal = parseFloat(currentNum.number) + this.state.total;
    console.log(currentTotal);
    
    this.setState({
      total: currentTotal
    })
    
  }

  addToHist = () => {
    const numToAdd = this.state.total;
    this.setState({
      total: 0,
      numHist: [...this.state.numHist, numToAdd]
    })
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <EnterNumber addCurrentNum={this.addCurrentNum}/>
        <br />
        <CurrentTotal addToHist={this.addToHist} currentTotal={this.state.total}/>
        <br />
        <History histList={this.state.numHist}/>
      </div>
    );
  }
}

export default App;
