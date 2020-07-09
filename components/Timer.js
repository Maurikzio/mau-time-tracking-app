import React from 'react';

import './timer-styles.css';

const transformTime = (millisec) => {
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

class Timer extends React.Component {
  render(){
    const elapsedString = transformTime(this.props.elapsed);
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
            <span onClick={this.props.onEditClick}>edit</span>
            <span>trash</span>
          </div>
        </div>
        
        <button className='timer-control'>Start</button>

      </div>
    )
  }
}

export default Timer;

//STATEFUL
//remains stateless, it does not need to be modified


//Timer has a fair amount of behavior. It needs to handle DELETE and EDIT clicks, as well as the START and STOP timer logic.