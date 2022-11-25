import React from 'react';

class Feedback extends React.Component {
  render() {
    return (
      <div className="Feedback">
        <span className="Feedback__title">Please leave feedback</span>
        <div className="Feedback__btns">
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
      </div>
    );
  }
}

export default Feedback;
