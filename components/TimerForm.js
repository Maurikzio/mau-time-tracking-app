import React from 'react';

import './timer-form-styles.css';

class TimerForm extends React.Component {
  //state for form, it uses the this.props.title when is UPDATE cliclek and '' when ADD '+' new timer is clicked
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  }

  handleTitleChange = e => {
    const { target: { value } } = e;
    this.setState({ title: value })
  }

  handleProjectChange = e => {
    const { target: { value } } = e;
    this.setState({ project: value })
  }

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    })
  }

  render(){
    //we will use the 'id' as opposed to title, to determine whether or not an object has been created.
    const submitText = this.props.id ? 'Update' : 'Create';
    return(
      <div className='timer-form-card'>

        <div className='field'>
          <label>Title</label>
          <input 
            type='text' 
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>

        <div className='field'>
          <label>Project</label>
          <input 
            type='text' 
            value={this.state.project}
            onChange={this.handleProjectChange}
          />
        </div>

        <div className='controls'>
          <button 
            className='timer-btn btn-blue'
            onClick={this.handleSubmit}
          >
            {submitText}
          </button>
          <button 
            className='timer-btn btn-red' 
            onClick={this.props.onFormClose}
            >
              Cancel
            </button>
        </div>
      </div>
    )
  }
}

export default TimerForm;

//TimerForm needs to propagate CREATE and UPDATE events
//CREATE while under ToggleableTimerForm and UPDATE while under EditableTimer.
//both evetns will eventually reach TimersDashboard.

//TimerForm needs to event handlers
//1-when the form is submitted *creating or updating a timer)
//2-when the 'Cancel' button is clicked (closing the form)

//Timer for will receive two functions as props to handle each event, the parent of TimerForm is responsible for providing these functions

//-props.onFormSubmit(): called whrn thef roms is cubmitted
//-props.onFormClose(): called when the 'Cancel' button is clicked.

