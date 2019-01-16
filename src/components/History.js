import React, { Component } from 'react';

class History extends Component {
    render () {
        return (
            <div>
                <div id="HistoryDiv">
                    <h4>History</h4>
                    {JSON.stringify(this.props.histList)}
                    {/* display history of numbers */}
                </div>
            </div>
        )
    }
}


export default History;