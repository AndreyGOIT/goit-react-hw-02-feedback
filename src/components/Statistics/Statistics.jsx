import React from 'react';

class Statistics extends React.Component {
  render() {
    return (
      <div className="Statistics">
        <span className="Statistics__title">Statistics</span>
        <div className="Statistics__items">
          <p className="Statistics__item">Good:</p>
          <p className="Statistics__item">Neutral:</p>
          <p className="Statistics__item">Bad:</p>
        </div>
      </div>
    );
  }
}

export default Statistics;
