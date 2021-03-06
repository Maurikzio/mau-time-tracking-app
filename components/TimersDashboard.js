import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

import './styles/timer-dashboard-styles.css';


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
        // runningSince: Date.now()
        runningSince: null
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        // runningSince: Date.now()
        runningSince: null
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

  handleEditFormSubmit = (data) => {
    this.updateTimer(data);
  }

  updateTimer = (updatedTimer) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if(timer.id === updatedTimer.id){
          return Object.assign({}, timer, { title: updatedTimer.title, project: updatedTimer.project})
        } else {
          return timer;
        }
      })
    })
  }

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  }

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== timerId)
    })
  }


  handleStartCLick = (timerId) => {
    this.startTimer(timerId)
  }

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  }

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  render(){
  
    return (
      <div className='dashboard-wrapper'>
          <EditableTimerList 
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartCLick}
            onStopClick={this.handleStopClick}
          />
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