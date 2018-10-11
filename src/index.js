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
                            <div id="break-increment"><img src={up}/></div>
                            <div id="break-length">5</div>
                            <div id="break-decrement"><img src={down}/></div>
                        </div>
                    </div>

                    <div id="session-label">
                        <div id="session-head">
                            <h3>Session</h3>
                        </div>
                        <div id="session-controls">
                            <div id="session-increment"><img src={up}/></div>
                            <div id="session-length">25</div>
                            <div id="session-decrement"><img src={down}/></div>
                        </div>
                    </div>
                </div>

                <div id="clock">
                    <div id="time-left">25:00</div>
                    <div id="clock-controls">
                        <div id="start_stop">
                            <div id="play"><img src={play}/></div>
                            <div id="pause"><img src={pause}/></div>
                        </div>
                        <div id="reset"><img src={reset}/></div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
