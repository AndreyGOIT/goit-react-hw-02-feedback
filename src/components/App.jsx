import React, { Component } from 'react';
import Feedback from '../components/Feedback';
import Statistics from '../components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Feedback />
        <Statistics state={this.state} />
      </>
    );
  }
}

export default App;
