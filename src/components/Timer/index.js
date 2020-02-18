import React, { Component, Fragment } from 'react';
import moment from 'moment';

export default class Timer extends Component {
  constructor (props) {
    super(props);
    this.timeoutlId = null;
    this.state = {
      time: moment({
                     hour: 0,
                     minute: 0,
                     second: 0
                   }),
      isRun: false,

    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.state.isRun) {
      this.timeoutlId = setTimeout(this.incrementSecond, 1000);
    }

  }

  clearTimeout = () => {
    if (this.timeoutlId) {
      clearInterval(this.timeoutlId);
      this.timeoutlId = null;
    }
  };

  incrementSecond = () => {
    this.setState({
                    time: moment(this.state.time).add(1, 's')
    });
  };

  componentWillUnmount () {
    this.clearTimeout()
  }

  render () {
    return (<Fragment>
      <h1>{this.state.time.format('HH:mm:ss')}</h1>
      <button onClick={() => {
        this.setState({ isRun: !this.state.isRun });
      }}>{this.state.isRun
          ? 'Stop'
          : 'Start'}</button>
      <button onClick={() => {
        this.setState({
                        time: moment({
                                       hour: 0,
                                       minute: 0,
                                       second: 0
                                     })
                      });
      }}> Reset
      </button>
    </Fragment>);
  }
}