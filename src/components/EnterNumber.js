import React, { Component } from 'react';

class EnterNumber extends Component {
    render() {
        return (
            <div>
                <br />
                <div id="EnterDiv">
                    <form>
                        <button>Up</button>
                        <input type="text" placeholder="Enter Number" />
                        <button>Down</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EnterNumber;