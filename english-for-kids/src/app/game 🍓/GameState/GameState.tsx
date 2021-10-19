/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TEST_STATES } from '../../Shared 🍌/Constants';
import { useGameStateContext } from '../../Shared 🍌/GameStateContext';
import { useTestStateContext } from '../../Shared 🍌/TestStateContext';
import { useTestVariables } from '../../Shared 🍌/TestVariables';
import GameHistory from './History/History';
import './GameState.scss';

export default function GameState() {
  const { gameState, setGameState } = useGameStateContext();
  const { setTestState } = useTestStateContext();
  const { testVariables } = useTestVariables();
  const history = React.useRef<HTMLUListElement>(null);

  history.current?.addEventListener('hide', (e) => {
    const target = e.currentTarget as HTMLUListElement;
    target.classList.add('hidden');
  });

  history.current?.addEventListener('show', (e) => {
    const target = e.currentTarget as HTMLUListElement;
    target.classList.remove('hidden');
  });

  function changeState() {
    history.current?.dispatchEvent(new CustomEvent('hide'));
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach((element) => {
      element.classList.remove('correct');
    });

    if (gameState) {
      setGameState(!gameState);
      setTestState(TEST_STATES.INACTIVE);
    } else {
      setGameState(!gameState);
      setTestState(TEST_STATES.START);
    }
  }
  const className = gameState ? 'game-state' : 'practice-state';

  return (
    <div className="upper-block">
      <div className="answers">
        <ul ref={history} className="history-showcase">
          {testVariables.answersHistory.map((e, i) => <GameHistory answer={e} key={`${e}-${i}`} />)}
        </ul>
      </div>
      <div className="state-btn-container">
        <button type="button" className={`state-btn ${className}`} onClick={changeState}>
          {gameState ? 'Test' : 'Practice'}
        </button>
      </div>
    </div>
  );
}
