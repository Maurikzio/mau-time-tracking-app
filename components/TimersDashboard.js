import React from 'react';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

import './timer-dashboard-styles.css';

class TimersDashboard extends React.Component {
  render(){
    return (
      <div className='dashboard-wrapper'>
          <EditableTimerList/>
          <ToggleableTimerForm isOpen={true}/> 
      </div>
    )
  }
}

export default TimersDashboard;

//isOpen--> is used by the child Component to determine whether to render a '+' or <TimerForm/>
//when the ToogleableTimer is 'open' the form is beign displayed