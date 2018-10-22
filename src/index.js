import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerLabel: 'Session',
            play: true,
            timeleft: 1500
        }
        this.clickControls = this.clickControls.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        this.setState({
            timeleft: this.state.timeleft / 60 + ':00'
        });
    }

    clickControls(e) {
        let max = 60;
        let min = 1;
        let timeleft = parseInt(this.state.timeleft);

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
                timeleft++;
                this.setState({
                    sessionLength: this.state.sessionLength + 1,
                    timeleft: timeleft + ':00'

                })
            }
        } else if (e.target.value === 'sessionDecrement') {
            if (this.state.sessionLength > min) {
                timeleft--;
                this.setState({
                    sessionLength: this.state.sessionLength - 1,
                    timeleft: timeleft + ':00'
                })
            }
        }
    }

    reset() {
        clearInterval(this.timerID);
        this.setState({breakLength: 5, sessionLength: 25, timerLabel: 'Session', play: true, timeleft: 1500})
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
                        <div id="time-left">{this.state.timeleft}</div>
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
