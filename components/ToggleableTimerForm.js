import React from 'react';

import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
  render(){
      if(this.props.isOpen){
        return(
          <TimerForm/>
        )
      } else {
        return (
          <div>
            <button>+</button>
          </div>
        )
      }
  }
}

export default ToggleableTimerForm;


//in this case the TimerForm wont receive any props
//so the inputs gonna be empty, because we want to add a new Timer not edit  one.