import React from 'react';
import styles from './Feedback.module.css';
import Buttons from './Btns';

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
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({
      bad: this.state.bad + 1,
    }));
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
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
