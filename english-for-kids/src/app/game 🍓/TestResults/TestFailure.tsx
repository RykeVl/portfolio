import React from 'react';
import './TestResults.scss';

export default function Failure() {
  return (
    <div className="test-result">
      <h2>Failure</h2>
      <img src="./icons/failure.png" alt="failure" />
    </div>
  );
}
