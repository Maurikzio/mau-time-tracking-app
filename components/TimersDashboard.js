import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

import './timer-dashboard-styles.css';

class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuidv4(),
        elapsed: 8986300,
        runningSince: Date.now()
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: Date.now()
      }
    ]
  }
  render(){
  
    return (
      <div className='dashboard-wrapper'>
          <EditableTimerList timers={this.state.timers}/>
          <ToggleableTimerForm isOpen={true}/> 
      </div>
    )
  }
}

export default TimersDashboard;
//STATIC
//isOpen--> is used by the child Component to determine whether to render a '+' or <TimerForm/>
//when the ToogleableTimer is 'open' the form is beign displayed

//STATEFUL
//TimersDashboardholdd the timer data directly inside the component