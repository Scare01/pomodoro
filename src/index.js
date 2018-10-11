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
            sessionLength: 25,
            mm: 25,
            ss: '00',
            timerLabel: 'Session',
            play: false
        }
        this.clickControls = this.clickControls.bind(this);
        this.startStop = this.startStop.bind(this);
        this.reset = this.reset.bind(this);
        this.seconds = this.seconds.bind(this);
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

    startStop() {
        this.setState(play : !this.state.play)
    }

    seconds() {
        if () 
            let sec = this.state.ss
        if (sec === '00') {
            sec = '59';
        } else if (sec === '01') {
            sec = '00';
        } else {
            sec = (parseInt(sec) - 1).toString();
        }
        this.setState({ss: sec});
    }
    reset() {
        this.setState({breakLength: 5, sessionLength: 25, mm: 25, timerLabel: 'Session', play: false})
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
                                <h3>{this.state.timerLabel}</h3>
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
                        <div id="time-left">{this.state.mm}:{this.state.ss}</div>
                        <div id="clock-controls">
                            <button id="start_stop" onClick={this.startStop}>Play/Pause</button>
                            <button id="reset" onClick={this.reset}>Reset</button>
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
