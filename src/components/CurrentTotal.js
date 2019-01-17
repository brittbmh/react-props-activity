import React, { Component } from 'react';

class CurrentTotal extends Component {
    saveNumber = (currentTot) => {
        this.props.addToHist();
    }

    render() {
        const currentTot = this.props.currentTotal;
        console.log(currentTot);



        return (
            <div id="CurrentDiv">
                <h3>{currentTot}</h3>
                <button id="saveButton" onClick={this.saveNumber}>Save</button>
            </div>
        )
    }
}



export default CurrentTotal;