import React from 'react';

import './timer-form-styles.css';

class TimerForm extends React.Component {
  render(){
    const submitText = this.props.title ? 'Update' : 'Create';
  
    return(
      <div className='timer-form-card'>

        <div className='field'>
          <label>Title</label>
          <input type='text' defaultValue={this.props.title}/>
        </div>

        <div className='field'>
          <label>Project</label>
          <input type='text' defaultValue={this.props.project}/>
        </div>

        <div className='controls'>
          <button className='timer-btn btn-blue'>{submitText}</button>
          <button className='timer-btn btn-red'>Cancel</button>
        </div>
      </div>
    )
  }
}

export default TimerForm;