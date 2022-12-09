import React from 'react';
import PropTypes from 'prop-types';
import styles from './Btns.module.css';

const Buttons = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.feedback__btns}>
      <button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;

Buttons.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
