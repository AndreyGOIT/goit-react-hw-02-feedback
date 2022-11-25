import React from 'react';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState({
      good: 1,
    });
  };
  handleClickNeutral = () => {
    this.setState({
      neutral: 1,
    });
  };
  handleClickBad = () => {
    this.setState({
      bad: 1,
    });
  };

  render() {
    return (
      <>
        <div className={styles.feedback}>
          <span className={styles.feedback__title}>Please leave feedback</span>
          <div className={styles.feedback__btns}>
            <button type="button" onClick={this.handleClickGood}>
              Good
            </button>
            <button type="button" onClick={this.handleClickNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleClickBad}>
              Bad
            </button>
          </div>
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
