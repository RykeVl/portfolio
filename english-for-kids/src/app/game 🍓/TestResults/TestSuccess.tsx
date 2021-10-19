import React from 'react';
import './TestResults.scss';

export default function Success() {
  return (
    <div className="test-result">
      <h2>SUCCESS!</h2>
      <img src="./icons/success.png" alt="success" />
    </div>
  );
}
