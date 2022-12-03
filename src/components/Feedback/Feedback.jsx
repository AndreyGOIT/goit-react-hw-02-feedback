import React from 'react';
import styles from './Feedback.module.css';
import Buttons from './Btns';

let total = 0;
let positiveFeedBack = 0;
class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    total += 1;
    positiveFeedBack = Math.round((this.state.good / total) * 100);
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    total += 1;
    positiveFeedBack = Math.round((this.state.good / total) * 100);
  };
  handleClickBad = () => {
    this.setState(prevState => ({
      bad: this.state.bad + 1,
    }));
    total += 1;
    positiveFeedBack = Math.round((this.state.good / total) * 100);
  };
  countTotalFeedback = () => {
    total += 1;
  };
  countPositiveFeedbackPercentage = () => {
    positiveFeedBack = Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <>
        <div className={styles.feedback}>
          <span className={styles.feedback__title}>Please leave feedback</span>
          <Buttons
            onHandleClickGood={this.handleClickGood}
            onHandleClickNeutral={this.handleClickNeutral}
            onHandleClickBad={this.handleClickBad}
          />
        </div>
        <div className={styles.statistics}>
          <span className={styles.statistics__title}>Statistics</span>
          <div className={styles.statistics__items}>
            <p className={styles.statistics__item}>Good: {this.state.good}</p>
            <p className={styles.statistics__item}>
              Neutral: {this.state.neutral}
            </p>
            <p className={styles.statistics__item}>Bad: {this.state.bad}</p>
            <p className={styles.statistics__item}>Total: {total}</p>
            <p className={styles.statistics__item}>
              Positive feedback: {positiveFeedBack} %
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
