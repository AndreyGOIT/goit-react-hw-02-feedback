import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
// import Statistics from './Statistics/Statistics';

class App extends Component {
  render() {
    return (
      <>
        <Feedback initialValue={0} />
        {/* <Statistics /> */}
      </>
    );
  }
}

export default App;
