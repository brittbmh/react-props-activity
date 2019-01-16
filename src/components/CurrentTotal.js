import React, { Component } from 'react';

class CurrentTotal extends Component {
    render() {
        return (
            <div>
                <div id="CurrentDiv">
                    {/* display current number */}
                    <button id="saveButton" onClick={this.saveNumber}>Save</button>
                </div>
            </div>
        )
    }
}



export default CurrentTotal;