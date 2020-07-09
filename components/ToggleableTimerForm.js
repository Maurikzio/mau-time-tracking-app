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
  render(){
      if(this.state.isOpen){
        return(
          <TimerForm onAdd={this.handleFormOpen}/>
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