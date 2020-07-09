import React from 'react';

import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false
  }

  handleFormOpen = () => {
    this.setState({
      // isOpen: !this.state.isOpen
      isOpen: true
    })
  }
  
  handleFormClose = () => {
    this.setState({ isOpen: false })
  }

  //ToogleableTimerForm is not the manager of 'timer' sate.
  handleFormSubmit = (timer) => {
    //accepts the argument 'timer', which is an object containing the desired timer properties
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  }


  render(){
      if(this.state.isOpen){
        return(
          <TimerForm 
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleFormClose}
          />
        )
      } else {
        return (
          <div style={{textAlign: 'center'}}>
            <button onClick={this.handleFormOpen}>+</button>
          </div>
        )
      }
  }
}

export default ToggleableTimerForm;


//in this case the TimerForm wont receive any props
//so the inputs gonna be empty, because we want to add a new Timer not edit  one.

//STATEFUL
//isOpen-is now a state