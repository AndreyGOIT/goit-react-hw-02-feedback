import React from 'react';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="Statistics">
        <span className="Statistics__title">Statistics</span>
        <div className="Statistics__items">
          <p className="Statistics__item">Good:{this.state.good}</p>
          <p className="Statistics__item">Neutral:{this.state.neutral}</p>
          <p className="Statistics__item">Bad:{this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default Statistics;
