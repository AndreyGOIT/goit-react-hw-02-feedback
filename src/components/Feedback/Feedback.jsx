import React from 'react';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  render() {
    return (
      <div className={styles.feedback}>
        <span className={styles.feedback__title}>Please leave feedback</span>
        <div className={styles.feedback__btns}>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
      </div>
    );
  }
}

export default Feedback;
