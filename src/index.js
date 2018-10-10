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
                <div id="settings">settings</div>
                <div id="clock">clock</div>
            </div>

        </div>)

    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
