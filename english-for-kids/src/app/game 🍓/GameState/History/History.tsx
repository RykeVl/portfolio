import React from 'react';
import './History.scss';

interface HistoryProp {
  answer: boolean
}

export default function History({ answer }: HistoryProp) {
  const url = answer ? 'ok' : 'wrong';

  return (
    <li>
      <img className="history-icon" src={`./icons/${url}.png`} alt={url} />
    </li>
  );
}
