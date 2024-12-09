import React from 'react';
import './FortuneDisplay.css';

const FortuneDisplay = ({ fortune }) => {
  return (
    <div className="fortune-display-container">
      <h3>{fortune.title}</h3>
      <p>{fortune.interpretation}</p>
    </div>
  );
};

export default FortuneDisplay;
