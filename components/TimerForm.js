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

  render(){
    const submitText = this.props.title ? 'Update' : 'Create';
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
          <button className='timer-btn btn-blue'>{submitText}</button>
          <button className='timer-btn btn-red' onClick={() => this.props.onAdd()}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default TimerForm;