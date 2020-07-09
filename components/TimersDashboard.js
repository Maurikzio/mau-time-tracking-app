import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

import './timer-dashboard-styles.css';


function newTimer(data={}){
  const timer = {
    title: data.title || 'Dummy Timer',
    project: data.project || 'Smart Timer',
    id: uuidv4(),
    elapsed: 0,
  };
  return timer;
}

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

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  }
  //why 2 functions handleCreateFormSubmit and createTimer, to follow the Single Responsibility Principle
  createTimer = (timer) => {
    const t = newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t)
    })
  }


  render(){
  
    return (
      <div className='dashboard-wrapper'>
          <EditableTimerList timers={this.state.timers}/>
          <ToggleableTimerForm 
            onFormSubmit={this.handleCreateFormSubmit}
          /> 
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

//the first event we're concerned with is the submission of a form. When this happens, either a new timer is beign created or an existing one is being updated
//we will use two separate functions to handle two distinct events:
//1-handleCreateFormSubmit(): will handle create and will be the function paseed to ToogleabletimerForm
//2-handleEditFormSubmit() will handle updates and will be the function passed to EditableTimerList
//both functions travel down their respective compoent hierarchies until they react TimerForm ad the prop onFormSubmit()