import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            mm: 25,
            ss: '0' + 0,
            timerLabel: 'Session',
            play: false
        }
        this.clickControls = this.clickControls.bind(this);
        this.clickStartStop = this.clickStartStop.bind(this);
        this.reset = this.reset.bind(this);
        this.tick = this.tick.bind(this);
    }

    clickControls(e) {
        let max = 60;
        let min = 1;

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
                    sessionLength: this.state.sessionLength + 1,
                    mm: this.state.mm + 1
                })
            }
        } else if (e.target.value === 'sessionDecrement') {
            if (this.state.sessionLength > min) {
                this.setState({
                    sessionLength: this.state.sessionLength - 1,
                    mm: this.state.mm - 1
                })
            }
        }
    }

    clickStartStop() {
        this.setState({
            play: !this.state.play
        })

        setTimeout(() => this.startStop(), 200);
    }

    startStop() {
        if (this.state.play === true) {
            this.timerID = setInterval(() => this.tick(), 50);
        } else {
            clearInterval(this.timerID);
        }
    }

    tick() {
        if (this.state.timerLabel === 'Session' && this.state.mm === 0 && this.state.ss === '00') {
            this.setState({
                timerLabel: 'Break',
                mm: this.state.breakLength,
                ss: '0' + 0
            })

        }
        if (this.state.timerLabel === 'Break' && this.state.mm === 0 && this.state.ss === '00') {
            this.setState({
                timerLabel: 'Session',
                mm: this.state.sessionLength,
                ss: '0' + 0
            })
        }
        if (this.state.ss === '00') {
            this.setState({
                ss: '60',
                mm: this.state.mm - 1
            })
        }
        if (this.state.ss <= '10') {
            this.setState({
                ss: '0'.concat((parseInt(this.state.ss) - 1).toString())
            })
        } else {
            this.setState({
                ss: (parseInt(this.state.ss) - 1).toString()
            })
        }
    }

    reset() {
        clearInterval(this.timerID);
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            mm: 25,
            timerLabel: 'Session',
            play: false,
            mm: 25,
            ss: '0' + 0
        })
    }

    render() {
        return (<div>
            <div id="pomodoro">
                <div id="head">
                    <h1>Pomodoro clock</h1>
                </div>
                <div id="main">
                    <div id="settings">
                        <div id="settings-head">
                            <h3>Settings:</h3>
                        </div>
                        <div id="break-label">
                            <div className="label-head">
                                <h3>Break</h3>
                            </div>
                            <div id="break-controls">
                                <button id="break-increment" onClick={this.clickControls} value="breakIncrement" className="glyphicon glyphicon-arrow-up"></button>
                                <div id="break-length">{this.state.breakLength}</div>
                                <button id="break-decrement" onClick={this.clickControls} value="breakDecrement" className="glyphicon glyphicon-arrow-down"></button>
                            </div>
                        </div>
                        <div id="session-label">
                            <div className="label-head">
                                <h3>Session</h3>
                            </div>
                            <div id="session-controls">
                                <button id="session-increment" onClick={this.clickControls} value="sessionIncrement" className="glyphicon glyphicon-arrow-up"></button>
                                <div id="session-length">{this.state.sessionLength}</div>
                                <button id="session-decrement" onClick={this.clickControls} value="sessionDecrement" className="glyphicon glyphicon-arrow-down"></button>
                            </div>
                        </div>
                    </div>
                    <div id="clock">
                        <h4 id="timer-label">{this.state.timerLabel}</h4>
                        <div id="time-left">{this.state.mm}:{this.state.ss}</div>
                        <div id="clock-controls">
                            <button id="start_stop" onClick={this.clickStartStop} className="btn btn-primary">Play/Pause</button>
                            <button id="reset" onClick={this.reset} className="btn btn-primary">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 id="copyright">
                by RubyLupus
            </h2>
        </div>)
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
