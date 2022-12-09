import React, { Component } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import Feedback from '../components/Feedback';
import Statistics from '../components/Statistics';
import Buttons from './Feedback/Btns';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    console.log(event);
    const key = event.target.name;
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalRates = this.countTotalFeedback();
    const goodRates = this.state.good;
    return goodRates > 0 ? Math.round((goodRates / totalRates) * 100) : 0;
  };

  render() {
    const totalRates = this.countTotalFeedback();
    console.log(totalRates);
    return (
      <>
        {/* <Section title="Please leave feedback"> */}
        {/* <FeedbackOptions
          options={Object.keys(this.state)}
          // onLeaveFeedback={this.handleClick}
        ></FeedbackOptions> */}
        {/* <Feedback /> */}
        {/* </Section> */}
        <Buttons onLeaveFeedback={this.handleClick} />

        {/* <Section title="Statistics"> */}
        {totalRates > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <span>"There is no feedback"</span>
          // <Notification message="There is no feedback" />
        )}
        {/* </Section> */}
      </>
    );
  }
}

export default App;
