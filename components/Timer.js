import React from 'react';

import TimerActionButton from './TimerActionButton';

import './styles/timer-styles.css';

const millisecondsToHuman = (millisec) => {
  let seconds = (millisec / 1000).toFixed(0);
  let minutes = Math.floor(seconds / 60);
  let hours = "";
  if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      hours = (hours >= 10) ? hours : "0" + hours;
      minutes = minutes - (hours * 60);
      minutes = (minutes >= 10) ? minutes : "0" + minutes;
  }

  seconds = Math.floor(seconds % 60);
  seconds = (seconds >= 10) ? seconds : "0" + seconds;
  if (hours != "") {
      return hours + ":" + minutes + ":" + seconds;
  }
  return minutes + ":" + seconds;
}

function renderElapsedString(elapsed, runningSince){
  let totalElapsed = elapsed;
  if(runningSince){
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed)
}

class Timer extends React.Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  }

  componentWillUnmount(){
    clearInterval(this.forceUpdateInterval)
  }

  handlerTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  }

  handleStopClick = () => {
    this.props.onStopClick(this.props.id)
  }


  render(){
    // const elapsedString = transformTime(this.props.elapsed);
    const elapsedString = renderElapsedString(this.props.elapsed, this.props.runningSince)
    return(
      <div className='timer-card'>

        <div className='timer-content'>
          <div className='timer-header'>
            {this.props.title}
          </div>
          <div className='timer-meta'>
            {this.props.project}
          </div>
          <div className='timer-description'>
            {elapsedString}
          </div>
          <div className='timer-extra-content'>
            <span onClick={this.props.onEditClick} className='timer-btn edit-btn'>edit</span>
            <span onClick={this.handlerTrashClick} className='timer-btn trash-btn'>trash</span>
          </div>
        </div>
        
        {/* <button className='timer-control'>Start</button> */} 

        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />

      </div>
    )
  }
}

export default Timer;

//STATEFUL
//remains stateless, it does not need to be modified


//Timer has a fair amount of behavior. It needs to handle DELETE and EDIT clicks, as well as the START and STOP timer logic.