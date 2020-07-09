import React from 'react';

import Timer from './Timer';
import TimerForm from './TimerForm';

import './editable-timer-styles.css';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  }

  render(){
    if(this.state.editFormOpen){
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
        />
      )
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      )
    }
  }
}

export default EditableTimer;

//STATEFUL
//editFormOpenwill actually live in the component itself, it will be false, 
//so all the FORMS starts off as closed.

