import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import up from './img/up.png';
import down from './img/down.png';
import play from './img/play.png';
import pause from './img/pause.png';
import reset from './img/reset.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25
        }
        this.clickControls = this.clickControls.bind(this);
    }

    clickControls(e) {
        let max = 60;
        let min = 0;

        if (e.target.value === 'breakIncrement') {
            if (this.state.breakLength < max) {
                this.setState({
                    breakLength: this.state.breakLength + 1
                })
            }
        } else if (e.target.value === 'breakDecrement') {
            if (this.state.breakLength > min) {
                this.setState({
                    breakLength: this.state.breakLength - 1
                })
            }
        } else if (e.target.value === 'sessionIncrement') {
            if (this.state.sessionLength < max) {
                this.setState({
                    sessionLength: this.state.sessionLength + 1
                })
            }

        } else if (e.target.value === 'sessionDecrement') {
            if (this.state.sessionLength > min) {
                this.setState({
                    sessionLength: this.state.sessionLength - 1
                })
            }

        }

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
                    <div id="break-label">
                        <div>
                            <h3>Break</h3>
                        </div>
                        <div id="break-controls">
                            <button id="break-increment" onClick={this.clickControls} value="breakIncrement"><img src={up}/></button>
                            <div id="break-length">{this.state.breakLength}</div>
                            <button id="break-decrement" onClick={this.clickControls} value="breakDecrement"><img src={down}/></button>
                        </div>
                    </div>
                    <div id="session-label">
                        <div id="session-head">
                            <h3>Session</h3>
                        </div>
                        <div id="session-controls">
                            <button id="session-increment" onClick={this.clickControls} value="sessionIncrement"><img src={up}/></button>
                            <div id="session-length">{this.state.sessionLength}</div>
                            <button id="session-decrement" onClick={this.clickControls} value="sessionDecrement"><img src={down}/></button>
                        </div>
                    </div>
                </div>
                <div id="clock">
                    <h4 id="timer-label">Session</h4>
                    <div id="time-left">

                        25:00
                    </div>
                    <div id="clock-controls">
                        <div id="start_stop">
                            <button id="play"><img src={play}/></button>
                            <button id="pause"><img src={pause}/></button>
                        </div>
                        <button id="reset"><img src={reset}/></button>
                    </div>
                </div>
            </div>
        </div>)
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
