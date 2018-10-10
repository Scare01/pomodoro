import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="pomodoro">
            <div id="head">
                <h1>Pomodoro clock</h1>
            </div>
            <div id="main">
                <div id="settings">
                    <div id="settings-head">
                        <h3>Settings:</h3>
                    </div>
                    <div id="break">
                        <div>
                            <h3>Break</h3>
                        </div>

                    </div>
                    <div id="session">
                        <div>
                            <h3>Session</h3>
                        </div>
                    </div>

                </div>
                <div id="clock">
                    <div id="time-left">25:00</div>
                    <div id="clock-control">controls</div>
                </div>
            </div>

        </div>)

    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
