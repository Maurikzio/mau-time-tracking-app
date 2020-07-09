import React from 'react';

import EditableTimer from './EditableTimer';
import './editable-timers-list-styles.css';

class EditableTimerList extends React.Component {
  render(){
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
        />
    ));
    return (
      <div id='timers'>
        {timers}
      </div>
    )
  }
}

export default EditableTimerList;

//STATIC
//editFormOpen was passed as a prop


//STATEFUL
//Receives the list of timer as a prop, timers.
//editFormOpen is no longer here.