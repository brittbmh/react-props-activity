import React, { Component } from 'react';

class History extends Component {
    


    render () {
        const historyList = [];
        for (let item of this.props.histList) {
            let listItem = (<li>{item}</li>)
            historyList.push(listItem);
        }
        

        return (
            <div>
                <div id="HistoryDiv">
                    <h4>History</h4>
                    {/* {JSON.stringify(this.props.histList)} */}
                    {/* display history of numbers */}
                    <ul id="historyList">
                        {historyList}
                    </ul>
                </div>
            </div>
        )
    }
}


export default History;