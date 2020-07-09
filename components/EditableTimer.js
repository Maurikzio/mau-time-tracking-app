import React from 'react';

import Timer from './Timer';
import TimerForm from './TimerForm';

import './styles/editable-timer-styles.css';

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  }

  handleEditClick = () => {
    this.openForm();
  }
  
  handleFormClose = () => {
    this.closeForm();
  }

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  }

  closeForm = () => {
    this.setState({ editFormOpen: false });
  }
  openForm = () => {
    this.setState({ editFormOpen: true });
  }

  render(){
    if(this.state.editFormOpen){
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
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
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
          onStartClick={this.props.onStartClick}
          onStopClick={this.props.onStopClick}
        />
      )
    }
  }
}

export default EditableTimer;

//STATEFUL
//editFormOpenwill actually live in the component itself, it will be false, 
//so all the FORMS starts off as closed.

//it will display either the TimerForm(if we are editing) ot an individual Timer(ir we are not editing)
