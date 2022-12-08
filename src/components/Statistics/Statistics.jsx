import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={styles.statistics}>
        <span className={styles.statistics__title}>Statistics</span>
        <div className={styles.statistics__items}>
          <p className={styles.statistics__item}>Good: {good}</p>
          <p className={styles.statistics__item}>Neutral: {neutral}</p>
          <p className={styles.statistics__item}>Bad: {bad}</p>
          <p className={styles.statistics__item}>Total: {total}</p>
          <p className={styles.statistics__item}>
            Positive feedback: {positivePercentage} %
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistics;

// class Statistics extends React.Component {
//   render() {
//     return (
// <>
//   <div className={styles.statistics}>
//     <span className={styles.statistics__title}>Statistics</span>
//     <div className={styles.statistics__items}>
//       <p className={styles.statistics__item}>Good: {this.state.good}</p>
//       <p className={styles.statistics__item}>
//         Neutral: {this.state.neutral}
//       </p>
//       <p className={styles.statistics__item}>Bad: {this.state.bad}</p>
//       <p className={styles.statistics__item}>Total: 0</p>
//       <p className={styles.statistics__item}>Positive feedback: 0 %</p>
//     </div>
//   </div>
// </>
//     );
//   }
// }
