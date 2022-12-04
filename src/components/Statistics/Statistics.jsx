import React from 'react';
import styles from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <>
        <div className={styles.statistics}>
          <span className={styles.statistics__title}>Statistics</span>
          <div className={styles.statistics__items}>
            <p className={styles.statistics__item}>Good: {this.state.good}</p>
            <p className={styles.statistics__item}>
              Neutral: {this.state.neutral}
            </p>
            <p className={styles.statistics__item}>Bad: {this.state.bad}</p>
            <p className={styles.statistics__item}>Total: 0</p>
            <p className={styles.statistics__item}>Positive feedback: 0 %</p>
          </div>
        </div>
      </>
    );
  }
}

export default Statistics;
