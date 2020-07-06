import React, { Component } from 'react';

import TimersDashboard from './components/TimersDashboard.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <TimersDashboard/>
      </div>
    );
  }
}

export default App;