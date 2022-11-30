import React from 'react';
import styles from './Statistics.module.css';

let total = 0;
let positiveFeedBack = 0;
class Statistics extends React.Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  render() {
    return (
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
    );
  }
}

export default Statistics;
