import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import beep from './beep.mp3';

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
        this.clock = this.clock.bind(this);
        this.clickStartStop = this.clickStartStop.bind(this);

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
                    timeleft: this.state.timeleft + 60
                })
            }
        } else if (e.target.value === 'sessionDecrement') {
            if (this.state.sessionLength > min) {
                this.setState({
                    sessionLength: this.state.sessionLength - 1,
                    timeleft: this.state.timeleft - 60
                })
            }
        }
    }

    setStartStopClock() {
        this.setState({
            play: !this.state.play
        });
    }

    clickStartStop() {
        this.setStartStopClock();
        clearInterval(this.timerID);
        if (this.state.play === true) {
            this.tick();
        }
    }

    tick() {
        this.timerID = setInterval(() => {
            setTimeout(() => this.checkSession(), 20);
            this.setState({
                timeleft: this.state.timeleft - 1
            });
        }, 1000);

    }

    checkSession() {
        if (this.state.timeleft === 0 && this.state.timerLabel === "Session") {
            this.setState({
                timeleft: this.state.breakLength * 60,
                timerLabel: "Break"
            });
            this.audioBeep.play();
        } else if (this.state.timeleft === 0 && this.state.timerLabel === "Break") {
            this.setState({
                timeleft: this.state.sessionLength * 60,
                timerLabel: "Session"
            });
            this.audioBeep.play();
        }
    }

    clock() {
        let minutes = Math.floor(this.state.timeleft / 60);
        let seconds = this.state.timeleft - minutes * 60;
        seconds = seconds < 10
            ? '0' + seconds
            : seconds;
        minutes = minutes < 10
            ? '0' + minutes
            : minutes;
        return minutes + ':' + seconds
    }

    reset() {
        this.setState({breakLength: 5, sessionLength: 25, timerLabel: 'Session', play: true, timeleft: 1500});
        clearInterval(this.timerID);
        this.audioBeep.pause();
        this.audioBeep.currentTime = 0;
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
                        <div id="time-left">{this.clock()}</div>
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
            <audio id="beep" src={beep} type="audio/mpeg" ref={(audio) => {
                    this.audioBeep = audio;
                }}/>
        </div>)
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
