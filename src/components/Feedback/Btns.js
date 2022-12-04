import React from 'react';
import styles from './Btns.module.css';

const Buttons = ({ onLeaveFeedback }) => (
  <div className={styles.feedback__btns}>
    <button type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default Buttons;
