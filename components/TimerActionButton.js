import React from 'react';

class TimerActionButton extends React.Component {
  render(){
    if(this.props.timerIsRunning){
      return (
        <div className='timer-control stop-btn' onClick={this.props.onStopClick}>Stop</div>
      )
    } else {
      return (
        <div className='timer-control start-btn' onClick={this.props.onStartClick}>Start</div>
      )
    } 
  }
}

export default TimerActionButton;