import React, { Component } from 'react';

let currentNum = 0;

class EnterNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ''
        }
    }

    changeNum = (event) => {
        console.log(event.target.value);
        this.setState({
            number: event.target.value
        })
    }

    changeUp = (event) => {
        event.preventDefault();
        currentNum = {number: this.state.number}
        console.log(currentNum);
        this.sendToApp(currentNum);
    }

    changeDown = (event) => {
        event.preventDefault();
        currentNum = {number: this.state.number * -1}
        console.log(currentNum);
        this.sendToApp(currentNum);
    }

    sendToApp = (currentNum) => {
        this.props.addCurrentNum(currentNum);
        this.setState({
            number: ''
        })
    }

    render() {
        return (
            <div>
                <br />
                <div id="EnterDiv">
                    <button id="upButton" onClick={this.changeUp}>Up</button>
                    <input type="number" onChange={this.changeNum} value={this.state.number} />
                    <button id="downButton" onClick={this.changeDown}>Down</button>
                </div>
            </div>
        )
    }
}

export default EnterNumber;