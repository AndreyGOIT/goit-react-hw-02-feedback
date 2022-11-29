import React from 'react';
import styles from './Btns.module.css';

const Buttons = ({
  onHandleClickGood,
  onHandleClickNeutral,
  onHandleClickBad,
}) => (
  <div className={styles.feedback__btns}>
    <button type="button" onClick={onHandleClickGood}>
      Good
    </button>
    <button type="button" onClick={onHandleClickNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onHandleClickBad}>
      Bad
    </button>
  </div>
);

export default Buttons;
